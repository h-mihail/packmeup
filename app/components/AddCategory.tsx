import { useContext, useEffect, useState } from "react";

import { IListContext, ListContext } from "../providers/listProvider";
import { useAddEntity } from "../hooks/useAddEntity";
import { addCategory } from "../queries/addCategory";

export const AddCategory = () => {
  const { selectedList } = useContext(ListContext) as IListContext;

  const [active, setActive] = useState(false);
  const [newCategoryName, setNewCategoryName] = useState("");
  const { handleAddEntity } = useAddEntity({
    callback: () => {
      toggleSetActive();
    },
    query: addCategory,
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
    <div className="mt-8">
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
              handleAddEntity({
                listId: selectedList?._id ?? "",
                name: newCategoryName,
              })
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
          <button onClick={toggleSetActive}>+ Add new category</button>
        </div>
      )}
    </div>
  );
};
