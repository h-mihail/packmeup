import { useContext } from "react";

import { IListContext, ListContext } from "../providers/listProvider";
import { AddList } from "./AddList";
import { DeleteList } from "./DeleteList";

export const Lists = () => {
  const { lists, setSelectedList } = useContext(ListContext) as IListContext;

  return (
    <div className="border-r-2 p-2">
      {lists && (
        <div className="flex flex-col gap-2">
          {lists.map((list) => (
            <div key={list._id} className="flex justify-between gap-2 group">
              <div
                className="cursor-pointer"
                onClick={() => setSelectedList(list)}
              >
                {list.name}
              </div>
              <DeleteList id={list._id} />
            </div>
          ))}
          <AddList />
        </div>
      )}
    </div>
  );
};
