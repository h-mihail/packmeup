import { useContext } from "react";

import { List } from "./List";
import { AddList } from "./AddList";
import { IListContext, ListContext } from "../providers/listProvider";

export const Lists = () => {
  const { lists } = useContext(ListContext) as IListContext;

  return (
    <div className="border-r-2 p-2">
      {lists && (
        <div className="flex flex-col gap-2">
          {lists.map((list) => (
            <List key={list._id} list={list} />
          ))}
          <AddList />
        </div>
      )}
    </div>
  );
};
