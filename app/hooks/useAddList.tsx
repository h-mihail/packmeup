import { useMutation, useQueryClient } from "@tanstack/react-query";

import { addList } from "../queries/addList";

interface UseAddListProps {
  callback: () => void;
}

export const useAddList = ({ callback }: UseAddListProps) => {
  const queryClient = useQueryClient();

  const addListMutation = useMutation({
    mutationFn: (name: string) => addList({ name }),
    onSuccess: () => {
      if (callback) callback();
      queryClient.invalidateQueries({ queryKey: ["lists"] });
    },
  });

  const handleAddList = (name: string) => {
    addListMutation.mutate(name);
  };

  return {
    handleAddList,
  };
};
