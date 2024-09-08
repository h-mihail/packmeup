import { useContext } from "react";
import { IListContext, ListContext } from "../providers/listProvider";
import { AddList } from "./AddList";

export const Lists = () => {
  const { lists, setSelectedList } = useContext(ListContext) as IListContext;

  return (
    <div className="border-r-2 p-2">
      {lists && (
        <div className="flex flex-col gap-2">
          {lists.map((list) => (
            <div
              className="cursor-pointer"
              key={list._id}
              onClick={() => setSelectedList(list)}
            >
              {list.name}
            </div>
          ))}
          <AddList />
        </div>
      )}
    </div>
  );
};
