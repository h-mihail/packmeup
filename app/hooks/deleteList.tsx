import { useMutation, useQueryClient } from "@tanstack/react-query";

import { deleteList } from "../queries/deleteList";

interface UseDeleteListProps {
  callback?: () => void;
}

export const useDeleteList = ({ callback }: UseDeleteListProps = {}) => {
  const queryClient = useQueryClient();

  const deleteListMutation = useMutation({
    mutationFn: (id: string) => deleteList({ id }),
    onSuccess: () => {
      if (callback) callback();
      queryClient.invalidateQueries({ queryKey: ["lists"] });
    },
  });

  const handleDeleteList = (name: string) => {
    deleteListMutation.mutate(name);
  };

  return {
    handleDeleteList,
  };
};
