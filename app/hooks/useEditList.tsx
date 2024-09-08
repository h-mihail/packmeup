import { useMutation, useQueryClient } from "@tanstack/react-query";

import { editList } from "../queries/editList";

interface UseEditListProps {
  callback?: () => void;
}

export const useEditList = ({ callback }: UseEditListProps = {}) => {
  const queryClient = useQueryClient();

  const editListMutation = useMutation({
    mutationFn: ({ id, name }: { id: string; name: string }) =>
      editList({ id, name }),
    onSuccess: () => {
      if (callback) callback();
      queryClient.invalidateQueries({ queryKey: ["lists"] });
    },
  });

  const handleEditList = (id: string, name: string) => {
    editListMutation.mutate({ id, name });
  };

  return {
    handleEditList,
  };
};
