import { IList } from "../types";

interface DeleteListProps {
  id: string;
}

export const deleteList = async ({ id }: DeleteListProps) => {
  const response = await fetch(`/api/list/${id}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  const data: IList = await response.json();

  return data;
};
