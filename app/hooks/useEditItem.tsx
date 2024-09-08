import { useMutation, useQueryClient } from "@tanstack/react-query";

import { editItem, EditItemProps } from "../queries/editItem";

interface UseEditItemProps {
  callback?: () => void;
}

export const useEditItem = ({ callback }: UseEditItemProps = {}) => {
  const queryClient = useQueryClient();

  const editItemMutation = useMutation({
    mutationFn: (props: EditItemProps) => editItem(props),
    onSuccess: () => {
      if (callback) callback();
      queryClient.invalidateQueries({ queryKey: ["lists"] });
    },
  });

  const handleEditItem = (props: EditItemProps) => {
    editItemMutation.mutate(props);
  };

  return {
    handleEditItem,
  };
};
