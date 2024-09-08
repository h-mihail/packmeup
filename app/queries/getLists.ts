export const getLists = async () => {
  const response = await fetch("/api/list");

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  const data = response.json();

  return data;
};
