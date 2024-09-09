import { useContext } from "react";

import { IListContext, ListContext } from "../providers/listProvider";
import { useAddEntity } from "../hooks/useAddEntity";
import { addItem } from "../queries/addItem";

interface AddItemProps {
  categoryId: string;
}

export const AddItem: React.FC<AddItemProps> = ({ categoryId }) => {
  const { handleAddEntity } = useAddEntity({
    query: addItem,
  });
  const { selectedList } = useContext(ListContext) as IListContext;

  const handleAddNewItem = () => {
    handleAddEntity({ categoryId, listId: selectedList?._id ?? "" });
  };

  return (
    <div>
      <button onClick={handleAddNewItem}>+ Add new item</button>
    </div>
  );
};
