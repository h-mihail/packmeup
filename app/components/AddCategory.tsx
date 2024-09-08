import { useContext, useEffect, useState } from "react";

import { useAddCategory } from "../hooks/useAddCategory";
import { IListContext, ListContext } from "../providers/listProvider";

export const AddCategory = () => {
  const { selectedList } = useContext(ListContext) as IListContext;

  const [active, setActive] = useState(false);
  const [newCategoryName, setNewCategoryName] = useState("");
  const { handleAddCategory } = useAddCategory({
    callback: () => {
      toggleSetActive();
    },
  });

  const toggleSetActive = () => {
    setActive(!active);
  };

  const onChangeNewCategoryName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewCategoryName(e.target.value);
  };

  useEffect(() => {
    setNewCategoryName("");
  }, [active]);

  return (
    <div className="mt-4">
      {active ? (
        <div className="flex gap-2">
          <input
            className="w-30 bg-transparent border rounded-md p-1 border-white"
            value={newCategoryName}
            onChange={onChangeNewCategoryName}
          />
          <button
            className="bg-green-900 py-1 px-2 rounded"
            disabled={newCategoryName === ""}
            onClick={() =>
              handleAddCategory(selectedList?._id ?? "", newCategoryName)
            }
          >
            Add
          </button>
          <button
            className="bg-orange-900 py-1 px-2 rounded"
            onClick={toggleSetActive}
          >
            Cancel
          </button>
        </div>
      ) : (
        <div>
          <button onClick={toggleSetActive}>+ Add new</button>
        </div>
      )}
    </div>
  );
};
