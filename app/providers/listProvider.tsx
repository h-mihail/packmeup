"use client";

import { createContext, useMemo, useState } from "react";
import { useGetLists } from "../hooks/useGetLists";
import { IList } from "../types";

export interface IListContext {
  lists?: IList[];
  selectedList?: IList;
  setSelectedList: (id: string) => void;
}

export const ListContext = createContext<IListContext | null>(null);

const ListProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { data } = useGetLists();
  const [selectedListId, setSelectedListId] = useState<string>("");

  const handleSetSelectedList = (id: string) => {
    setSelectedListId(id);
  };

  const selectedList = useMemo(() => {
    return data?.find((list) => list._id === selectedListId);
  }, [data, selectedListId]);

  return (
    <ListContext.Provider
      value={{
        lists: data,
        selectedList,
        setSelectedList: handleSetSelectedList,
      }}
    >
      {children}
    </ListContext.Provider>
  );
};

export default ListProvider;
