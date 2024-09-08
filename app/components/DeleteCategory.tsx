import { useDeleteCategory } from "../hooks/useDeleteCategory";

interface DeleteCategoryProps {
  id: string;
  listId: string;
}

export const DeleteCategory: React.FC<DeleteCategoryProps> = ({
  id,
  listId,
}) => {
  const { handleDeleteCategory } = useDeleteCategory();

  return (
    <button
      className="opacity-0 group-hover:opacity-100"
      onClick={() => handleDeleteCategory(id, listId)}
    >
      Delete
    </button>
  );
};
