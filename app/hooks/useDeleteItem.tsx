import { useMutation, useQueryClient } from "@tanstack/react-query";

import { deleteItem, DeleteItemProps } from "../queries/deleteItem";

interface UseDeleteItemProps {
  callback?: () => void;
}

export const useDeleteItem = ({ callback }: UseDeleteItemProps = {}) => {
  const queryClient = useQueryClient();

  const deleteItemMutation = useMutation({
    mutationFn: (props: DeleteItemProps) => deleteItem(props),
    onSuccess: () => {
      if (callback) callback();
      queryClient.invalidateQueries({ queryKey: ["lists"] });
    },
  });

  const handleDeleteItem = (props: DeleteItemProps) => {
    deleteItemMutation.mutate(props);
  };

  return {
    handleDeleteItem,
  };
};
