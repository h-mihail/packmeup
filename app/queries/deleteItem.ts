import { IItem } from "../types";

export interface DeleteItemProps {
  id: string;
  listId: string;
  categoryId: string;
}

export const deleteItem = async ({
  id,
  listId,
  categoryId,
}: DeleteItemProps) => {
  const response = await fetch(`/api/item/${id}`, {
    method: "DELETE",
    body: JSON.stringify({
      listId,
      categoryId,
    }),
  });

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  const data: IItem = await response.json();

  return data;
};
