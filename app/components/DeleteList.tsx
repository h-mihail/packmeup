import { useDeleteList } from "../hooks/useDeleteList";

interface DeleteListProps {
  id: string;
}

export const DeleteList: React.FC<DeleteListProps> = ({ id }) => {
  const { handleDeleteList } = useDeleteList();

  return (
    <button
      className="opacity-0 group-hover:opacity-100"
      onClick={() => handleDeleteList(id)}
    >
      Delete
    </button>
  );
};
