import { ICategory } from "../types";

interface DeleteCategoryProps {
  id: string;
  listId: string;
}

export const deleteCategory = async ({ id, listId }: DeleteCategoryProps) => {
  const response = await fetch(`/api/category/${id}`, {
    method: "DELETE",
    body: JSON.stringify({
      listId,
    }),
  });

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  const data: ICategory = await response.json();

  return data;
};
