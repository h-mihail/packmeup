import { useMutation, useQueryClient } from "@tanstack/react-query";

interface UseAddEntityProps<T, P> {
  callback?: () => void;
  query: (props: P) => Promise<T>;
}

export const useAddEntity = <T, P>({
  callback,
  query,
}: UseAddEntityProps<T, P>) => {
  const queryClient = useQueryClient();

  const addEntityMutation = useMutation({
    mutationFn: (props: P) => query(props),
    onSuccess: () => {
      if (callback) callback();
      queryClient.invalidateQueries({ queryKey: ["lists"] });
    },
  });

  const handleAddEntity = (props: P) => {
    addEntityMutation.mutate(props);
  };

  return {
    handleAddEntity,
  };
};
