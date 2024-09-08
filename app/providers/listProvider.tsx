"use client";

import { createContext, useEffect, useState } from "react";
import { useGetLists } from "../hooks/useGetLists";
import { IList } from "../types";

export interface IListContext {
  lists?: IList[];
  selectedList?: IList;
  setSelectedList: (list: IList) => void;
}

export const ListContext = createContext<IListContext | null>(null);

const ListProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { data } = useGetLists();
  const [selectedList, setSelectedList] = useState<IList>();

  const handleSetSelectedList = (list: IList) => {
    setSelectedList(list);
  };

  useEffect(() => {
    if (data?.[0]) setSelectedList(data[0]);
  }, [data]);

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
