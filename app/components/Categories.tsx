import { useContext } from "react";

import { Items } from "./Items";
import { AddItem } from "./AddItem";
import { Category } from "./Category";
import { AddCategory } from "./AddCategory";
import { IListContext, ListContext } from "../providers/listProvider";

export const Categories = () => {
  const { selectedList } = useContext(ListContext) as IListContext;

  return (
    <div>
      <div className="flex flex-col gap-8">
        {selectedList?.categories.map((category) => (
          <div
            className="flex flex-col gap-4 border rounded-md p-4"
            key={category._id}
          >
            <Category category={category} />
            <Items items={category.items} categoryId={category._id} />
            <AddItem categoryId={category._id} />
          </div>
        ))}
      </div>
      {selectedList && <AddCategory />}
    </div>
  );
};
