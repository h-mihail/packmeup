import { IItem } from "../types";

export interface AddItemProps {
  listId: string;
  categoryId: string;
  name?: string;
  weight?: number;
  measurementUnit?: string;
  quantity?: number;
  isWorn?: boolean;
}

export const addItem = async (props: AddItemProps) => {
  const response = await fetch("/api/item", {
    method: "POST",
    body: JSON.stringify(props),
  });

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  const data: IItem = await response.json();

  return data;
};
