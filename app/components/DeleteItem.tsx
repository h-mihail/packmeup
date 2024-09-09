import { useContext } from "react";

import { useDeleteItem } from "../hooks/useDeleteItem";
import { IListContext, ListContext } from "../providers/listProvider";

interface DeleteItemProps {
  id: string;
  categoryId: string;
}

export const DeleteItem: React.FC<DeleteItemProps> = ({ id, categoryId }) => {
  const { handleDeleteItem } = useDeleteItem();
  const { selectedList } = useContext(ListContext) as IListContext;

  return (
    <button
      className="opacity-0 group-hover:opacity-100"
      onClick={() =>
        handleDeleteItem({ id, listId: selectedList?._id ?? "", categoryId })
      }
    >
      Delete
    </button>
  );
};
