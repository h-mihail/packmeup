import { useDeleteEntity } from "../hooks/useDeleteEntity";
import { deleteCategory } from "../queries/deleteCategory";

interface DeleteCategoryProps {
  id: string;
  listId: string;
}

export const DeleteCategory: React.FC<DeleteCategoryProps> = ({
  id,
  listId,
}) => {
  const { handleDeleteEntity } = useDeleteEntity({
    query: deleteCategory,
  });

  return (
    <button
      className="opacity-0 group-hover:opacity-100"
      onClick={() => handleDeleteEntity({ id, listId })}
    >
      Delete
    </button>
  );
};
