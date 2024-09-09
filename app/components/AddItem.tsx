import { useContext } from "react";

import { useAddItem } from "../hooks/useAddItem";
import { IListContext, ListContext } from "../providers/listProvider";

interface AddItemProps {
  categoryId: string;
}

export const AddItem: React.FC<AddItemProps> = ({ categoryId }) => {
  const { handleAddItem } = useAddItem();
  const { selectedList } = useContext(ListContext) as IListContext;

  const handleAddNewItem = () => {
    handleAddItem({ categoryId, listId: selectedList?._id ?? "" });
  };

  return (
    <div>
      <button onClick={handleAddNewItem}>+ Add new item</button>
    </div>
  );
};
