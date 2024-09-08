import { ICategory } from "../types";

interface AddCategoryProps {
  listId: string;
  name: string;
}

export const addCategory = async ({ listId, name }: AddCategoryProps) => {
  const response = await fetch("/api/category", {
    method: "POST",
    body: JSON.stringify({
      listId,
      name,
    }),
  });

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  const data: ICategory = await response.json();

  return data;
};
