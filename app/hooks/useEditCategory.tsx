import { useMutation, useQueryClient } from "@tanstack/react-query";

import { editCategory } from "../queries/editCategory";

interface UseEditCategoryProps {
  callback?: () => void;
}

interface EditCategoryMutationProps {
  categoryId: string;
  name: string;
  listId: string;
}

export const useEditCategory = ({ callback }: UseEditCategoryProps = {}) => {
  const queryClient = useQueryClient();

  const editCategoryMutation = useMutation({
    mutationFn: ({ categoryId, name, listId }: EditCategoryMutationProps) =>
      editCategory({ categoryId, name, listId }),
    onSuccess: () => {
      if (callback) callback();
      queryClient.invalidateQueries({ queryKey: ["lists"] });
    },
  });

  const handleEditCategory = ({
    name,
    listId,
    categoryId,
  }: EditCategoryMutationProps) => {
    editCategoryMutation.mutate({ listId, name, categoryId });
  };

  return {
    handleEditCategory,
  };
};
