import React, { useContext } from "react";

import { IItem } from "../types";
import { useEditItem } from "../hooks/useEditItem";
import { IListContext, ListContext } from "../providers/listProvider";
import { ClickOutsideCbParams, EditableField } from "./shared/EditableField";
import { EditableSelectField } from "./shared/EditableSelectField";

interface ItemProps {
  item: IItem;
  categoryId: string;
}

export const Item: React.FC<ItemProps> = ({ item, categoryId }) => {
  const { selectedList } = useContext(ListContext) as IListContext;
  const { handleEditItem } = useEditItem();

  const clickOutsideCb = ({ e, ...rest }: ClickOutsideCbParams) => {
    e.preventDefault?.();
    handleEditItem({
      id: item._id,
      categoryId,
      listId: selectedList?._id ?? "",
      ...rest,
    });
  };

  const measurementUnitOptions = [
    { label: "g", value: "gram" },
    { label: "kg", value: "kilogram" },
    { label: "lb", value: "pound" },
  ];

  return (
    <React.Fragment key={item._id}>
      <EditableField
        name="name"
        value={item.name}
        clickOutsideCb={clickOutsideCb}
        extraClassName="mr-4"
      />
      <EditableField
        name="quantity"
        value={item.quantity}
        clickOutsideCb={clickOutsideCb}
        extraClassName="w-12"
      />
      <EditableField
        name="weight"
        value={item.weight}
        clickOutsideCb={clickOutsideCb}
        extraClassName="w-12"
      />
      <EditableSelectField
        name="measurementUnit"
        value={item.measurementUnit}
        options={measurementUnitOptions}
        clickOutsideCb={clickOutsideCb}
      />
    </React.Fragment>
  );
};
