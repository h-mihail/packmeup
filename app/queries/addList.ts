import { IList } from "../types";

interface AddListProps {
  name: string;
}

export const addList = async ({ name }: AddListProps) => {
  const response = await fetch("/api/list", {
    method: "POST",
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
