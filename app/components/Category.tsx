import { useContext, useEffect, useState } from "react";

import { ICategory } from "../types";
import { DeleteCategory } from "./DeleteCategory";
import { useEditCategory } from "../hooks/useEditCategory";
import { IListContext, ListContext } from "../providers/listProvider";

interface CategoryProps {
  category: ICategory;
}

export const Category: React.FC<CategoryProps> = ({ category }) => {
  const { selectedList } = useContext(ListContext) as IListContext;
  const [isEdit, setIsEdit] = useState(false);
  const [categoryName, setCategoryName] = useState(category.name);
  const { handleEditCategory } = useEditCategory({
    callback: () => {
      toggleIsEdit();
    },
  });

  const onChangeCategoryName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCategoryName(e.target.value);
  };

  const toggleIsEdit = () => {
    setIsEdit(!isEdit);
  };

  useEffect(() => {
    setCategoryName(category.name);
  }, [isEdit]);

  return isEdit ? (
    <div className="flex gap-2">
      <input
        className="w-30 bg-transparent border rounded-md p-1 border-white"
        value={categoryName}
        onChange={onChangeCategoryName}
      />
      <button
        className="bg-green-900 py-1 px-2 rounded"
        disabled={categoryName === category.name}
        onClick={() =>
          handleEditCategory({
            listId: selectedList?._id ?? "",
            categoryId: category._id,
            name: categoryName ?? "",
          })
        }
      >
        Save
      </button>
      <button
        className="bg-orange-900 py-1 px-2 rounded"
        onClick={toggleIsEdit}
      >
        Cancel
      </button>
    </div>
  ) : (
    <div key={category._id} className="flex justify-between gap-2 group">
      <div>{category.name}</div>
      <div className="flex gap-2">
        <button
          className="opacity-0 group-hover:opacity-100"
          onClick={toggleIsEdit}
        >
          Edit
        </button>
        <DeleteCategory id={category._id} listId={selectedList?._id ?? ""} />
      </div>
    </div>
  );
};
