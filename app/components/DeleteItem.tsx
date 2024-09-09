import { useContext } from "react";

import { deleteItem } from "../queries/deleteItem";
import { useDeleteEntity } from "../hooks/useDeleteEntity";
import { IListContext, ListContext } from "../providers/listProvider";

interface DeleteItemProps {
  id: string;
  categoryId: string;
}

export const DeleteItem: React.FC<DeleteItemProps> = ({ id, categoryId }) => {
  const { handleDeleteEntity } = useDeleteEntity({
    query: deleteItem,
  });
  const { selectedList } = useContext(ListContext) as IListContext;

  return (
    <button
      className="opacity-0 group-hover:opacity-100"
      onClick={() =>
        handleDeleteEntity({ id, listId: selectedList?._id ?? "", categoryId })
      }
    >
      Delete
    </button>
  );
};
