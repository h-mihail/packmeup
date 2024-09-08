import { useState } from "react";
import { useAddList } from "../hooks/useAddList";

export const AddList = () => {
  const [active, setActive] = useState(false);
  const [newListName, setNewListName] = useState("");
  const { handleAddList } = useAddList({
    callback: () => {
      toggleSetActive();
      setNewListName("");
    },
  });

  const toggleSetActive = () => {
    setActive(!active);
  };

  const handleNewListChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewListName(e.target.value);
  };

  return (
    <div className="mt-4">
      {active ? (
        <div className="flex gap-2">
          <input
            className="w-30 bg-transparent border rounded-md p-1 border-white"
            value={newListName}
            onChange={handleNewListChange}
          />
          <button
            className="bg-green-900 py-1 px-2 rounded"
            onClick={() => handleAddList(newListName)}
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
