import { IItem } from "../types";

export interface EditItemProps {
  id: string;
  listId: string;
  categoryId: string;
  name?: string;
  weight?: number;
  measurementUnit?: string;
  quantity?: number;
  isWorn?: boolean;
}

export const editItem = async ({
  id,
  listId,
  categoryId,
  ...rest
}: EditItemProps) => {
  const response = await fetch(`/api/item/${id}`, {
    method: "PATCH",
    body: JSON.stringify({
      listId,
      categoryId,
      ...rest,
    }),
  });

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  const data: IItem = await response.json();

  return data;
};
