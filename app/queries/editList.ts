import { IList } from "../types";

interface EditListProps {
  id: string;
  name: string;
}

export const editList = async ({ id, name }: EditListProps) => {
  const response = await fetch(`/api/list/${id}`, {
    method: "PATCH",
    body: JSON.stringify({
      name,
    }),
  });

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  const data: IList = await response.json();

  return data;
};
