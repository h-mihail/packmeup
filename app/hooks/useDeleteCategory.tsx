import { useMutation, useQueryClient } from "@tanstack/react-query";

import { deleteCategory } from "../queries/deleteCategory";

interface UseDeleteCategoryProps {
  callback?: () => void;
}

export const useDeleteCategory = ({
  callback,
}: UseDeleteCategoryProps = {}) => {
  const queryClient = useQueryClient();

  const deleteCategoryMutation = useMutation({
    mutationFn: ({ id, listId }: { id: string; listId: string }) =>
      deleteCategory({ id, listId }),
    onSuccess: () => {
      if (callback) callback();
      queryClient.invalidateQueries({ queryKey: ["lists"] });
    },
  });

  const handleDeleteCategory = (id: string, listId: string) => {
    deleteCategoryMutation.mutate({ id, listId });
  };

  return {
    handleDeleteCategory,
  };
};
