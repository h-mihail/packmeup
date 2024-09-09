import { useMutation, useQueryClient } from "@tanstack/react-query";

interface UseEditEntityProps<T, P> {
  callback?: () => void;
  query: (props: P) => Promise<T>;
}

export const useEditEntity = <T, P>({
  callback,
  query,
}: UseEditEntityProps<T, P>) => {
  const queryClient = useQueryClient();

  const editEntityMutation = useMutation({
    mutationFn: (props: P) => query(props),
    onSuccess: () => {
      if (callback) callback();
      queryClient.invalidateQueries({ queryKey: ["lists"] });
    },
  });

  const handleEditEntity = (props: P) => {
    editEntityMutation.mutate(props);
  };

  return {
    handleEditEntity,
  };
};
