import { useEffect, useState } from "react";
import { useAddEntity } from "../hooks/useAddEntity";
import { addList } from "../queries/addList";

export const AddList = () => {
  const [active, setActive] = useState(false);
  const [newListName, setNewListName] = useState("");
  const { handleAddEntity } = useAddEntity({
    callback: () => {
      toggleSetActive();
    },
    query: addList,
  });

  const toggleSetActive = () => {
    setActive(!active);
  };

  const onChangeNewListName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewListName(e.target.value);
  };

  useEffect(() => {
    setNewListName("");
  }, [active]);

  return (
    <div className="mt-4">
      {active ? (
        <div className="flex gap-2">
          <input
            className="w-30 bg-transparent border rounded-md p-1 border-white"
            value={newListName}
            onChange={onChangeNewListName}
          />
          <button
            className="bg-green-900 py-1 px-2 rounded"
            disabled={newListName === ""}
            onClick={() => handleAddEntity({ name: newListName })}
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
          <button onClick={toggleSetActive}>+ Add new list</button>
        </div>
      )}
    </div>
  );
};
