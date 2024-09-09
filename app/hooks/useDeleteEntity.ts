import { useMutation, useQueryClient } from "@tanstack/react-query";

interface UseDeleteEntityProps<T, P> {
  callback?: () => void;
  query: (props: P) => Promise<T>;
}

export const useDeleteEntity = <T, P>({
  callback,
  query,
}: UseDeleteEntityProps<T, P>) => {
  const queryClient = useQueryClient();

  const deleteEntityMutation = useMutation({
    mutationFn: (props: P) => query(props),
    onSuccess: () => {
      if (callback) callback();
      queryClient.invalidateQueries({ queryKey: ["lists"] });
    },
  });

  const handleDeleteEntity = (props: P) => {
    deleteEntityMutation.mutate(props);
  };

  return {
    handleDeleteEntity,
  };
};
