import { IList } from "../types";

export const getLists = async () => {
  const response = await fetch("/api/list");

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  const data: IList[] = await response.json();

  return data;
};
