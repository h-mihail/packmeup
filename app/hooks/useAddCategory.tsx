import { useMutation, useQueryClient } from "@tanstack/react-query";

import { addCategory } from "../queries/addCategory";

interface UseAddCategoryProps {
  callback: () => void;
}

export const useAddCategory = ({ callback }: UseAddCategoryProps) => {
  const queryClient = useQueryClient();

  const addCategoryMutation = useMutation({
    mutationFn: ({ listId, name }: { listId: string; name: string }) =>
      addCategory({ listId, name }),
    onSuccess: () => {
      if (callback) callback();
      queryClient.invalidateQueries({ queryKey: ["lists"] });
    },
  });

  const handleAddCategory = (listId: string, name: string) => {
    addCategoryMutation.mutate({ listId, name });
  };

  return {
    handleAddCategory,
  };
};
