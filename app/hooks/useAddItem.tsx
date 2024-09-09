import { useMutation, useQueryClient } from "@tanstack/react-query";

import { addItem, AddItemProps } from "../queries/addItem";

interface UseAddItemProps {
  callback?: () => void;
}

export const useAddItem = ({ callback }: UseAddItemProps = {}) => {
  const queryClient = useQueryClient();

  const addItemMutation = useMutation({
    mutationFn: (props: AddItemProps) => addItem(props),
    onSuccess: () => {
      if (callback) callback();
      queryClient.invalidateQueries({ queryKey: ["lists"] });
    },
  });

  const handleAddItem = (props: AddItemProps) => {
    addItemMutation.mutate(props);
  };

  return {
    handleAddItem,
  };
};
