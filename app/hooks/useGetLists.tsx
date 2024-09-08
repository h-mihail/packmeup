import { useQuery } from "@tanstack/react-query";

import { getLists } from "../queries/getLists";

export const useGetLists = () => {
  const { isPending, isError, data, error } = useQuery({
    queryKey: ["lists"],
    queryFn: getLists,
  });

  return {
    data,
    error,
    isError,
    isPending,
  };
};
