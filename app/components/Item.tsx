import React, { useContext } from "react";

import { IItem } from "../types";
import { useEditItem } from "../hooks/useEditItem";
import { ClickOutsideCbParams, EditableField } from "./EditableField";
import { IListContext, ListContext } from "../providers/listProvider";

interface ItemProps {
  item: IItem;
  categoryId: string;
}

export const Item: React.FC<ItemProps> = ({ item, categoryId }) => {
  const { selectedList } = useContext(ListContext) as IListContext;
  const { handleEditItem } = useEditItem();

  const clickOutsideCb = ({ e, ...rest }: ClickOutsideCbParams) => {
    e.preventDefault();
    handleEditItem({
      id: item._id,
      categoryId,
      listId: selectedList?._id ?? "",
      ...rest,
    });
  };

  return (
    <React.Fragment key={item._id}>
      <EditableField
        name="name"
        value={item.name}
        clickOutsideCb={clickOutsideCb}
      />
      <EditableField
        name="weight"
        value={item.weight}
        clickOutsideCb={clickOutsideCb}
      />
      <div>{item.measurementUnit}</div>
      <EditableField
        name="quantity"
        value={item.quantity}
        clickOutsideCb={clickOutsideCb}
      />
    </React.Fragment>
  );
};
