import { useContext, useEffect, useState } from "react";

import { IList } from "../types";
import { DeleteList } from "./DeleteList";
import { editList } from "../queries/editList";
import { useEditEntity } from "../hooks/useEditEntity";
import { IListContext, ListContext } from "../providers/listProvider";

interface ListProps {
  list: IList;
}

export const List: React.FC<ListProps> = ({ list }) => {
  const { setSelectedList } = useContext(ListContext) as IListContext;
  const [isEdit, setIsEdit] = useState(false);
  const [listName, setListName] = useState(list.name);
  const { handleEditEntity } = useEditEntity({
    callback: () => {
      toggleIsEdit();
    },
    query: editList,
  });

  const onChangeListName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setListName(e.target.value);
  };

  const toggleIsEdit = () => {
    setIsEdit(!isEdit);
  };

  useEffect(() => {
    setListName(list.name);
  }, [isEdit, list.name]);

  return isEdit ? (
    <div className="flex gap-2">
      <input
        className="w-30 bg-transparent border rounded-md p-1 border-white"
        value={listName}
        onChange={onChangeListName}
      />
      <button
        className="bg-green-900 py-1 px-2 rounded"
        disabled={listName === list.name}
        onClick={() => handleEditEntity({ id: list._id, name: listName })}
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
    <div className="flex justify-between gap-2 group">
      <div className="cursor-pointer" onClick={() => setSelectedList(list._id)}>
        {list.name}
      </div>
      <div className="flex gap-2">
        <button
          className="opacity-0 group-hover:opacity-100"
          onClick={toggleIsEdit}
        >
          Edit
        </button>
        <DeleteList id={list._id} />
      </div>
    </div>
  );
};
