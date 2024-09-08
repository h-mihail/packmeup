import { useContext } from "react";
import { IListContext, ListContext } from "../providers/listProvider";

export const ListDetails = () => {
  const { selectedList } = useContext(ListContext) as IListContext;

  return (
    <div className="flex justify-center">
      <h1 className="text-xl">{selectedList?.name}</h1>
    </div>
  );
};
