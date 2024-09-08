import { useContext } from "react";
import { IListContext, ListContext } from "../providers/listProvider";
import { AddCategory } from "./AddCategory";
import { DeleteCategory } from "./DeleteCategory";
import { Category } from "./Category";

export const Categories = () => {
  const { selectedList } = useContext(ListContext) as IListContext;

  return (
    <div>
      <div className="flex flex-col gap-2">
        {selectedList?.categories.map((category) => (
          <Category key={category._id} category={category} />
        ))}
      </div>
      <AddCategory />
    </div>
  );
};
