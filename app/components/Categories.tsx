import { useContext } from "react";
import { IListContext, ListContext } from "../providers/listProvider";
import { AddCategory } from "./AddCategory";
import { DeleteCategory } from "./DeleteCategory";

export const Categories = () => {
  const { selectedList } = useContext(ListContext) as IListContext;

  return (
    <div>
      <div className="flex flex-col gap-2">
        {selectedList?.categories.map((category) => (
          <div key={category._id} className="flex justify-between group">
            <div>{category.name}</div>
            <DeleteCategory id={category._id} listId={selectedList._id} />
          </div>
        ))}
      </div>
      <AddCategory />
    </div>
  );
};
