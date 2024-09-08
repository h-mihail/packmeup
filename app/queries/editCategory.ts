import { ICategory } from "../types";

interface EditCategoryProps {
  categoryId: string;
  name: string;
  listId: string;
}

export const editCategory = async ({
  categoryId,
  listId,
  name,
}: EditCategoryProps) => {
  const response = await fetch(`/api/category/${categoryId}`, {
    method: "PATCH",
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
