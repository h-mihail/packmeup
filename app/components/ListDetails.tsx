import { useContext } from "react";
import { IListContext, ListContext } from "../providers/listProvider";
import { Tooltip } from "./Tooltip";

export const ListDetails = () => {
  const { selectedList } = useContext(ListContext) as IListContext;

  return (
    <div className="flex flex-col gap-4 justify-center align-middle">
      <h1 className="text-2xl">{selectedList?.name}</h1>
      <Tooltip />
    </div>
  );
};
