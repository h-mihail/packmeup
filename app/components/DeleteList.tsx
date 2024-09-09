import { deleteList } from "../queries/deleteList";
import { useDeleteEntity } from "../hooks/useDeleteEntity";

interface DeleteListProps {
  id: string;
}

export const DeleteList: React.FC<DeleteListProps> = ({ id }) => {
  const { handleDeleteEntity } = useDeleteEntity({
    query: deleteList,
  });

  return (
    <button
      className="opacity-0 group-hover:opacity-100"
      onClick={() => handleDeleteEntity({ id })}
    >
      Delete
    </button>
  );
};
