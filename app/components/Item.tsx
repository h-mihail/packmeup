import React, { useContext } from "react";

import { IItem } from "../types";
import { useEditItem } from "../hooks/useEditItem";
import { IListContext, ListContext } from "../providers/listProvider";
import { ClickOutsideCbParams, EditableField } from "./shared/EditableField";
import { EditableSelectField } from "./shared/EditableSelectField";
import { DeleteItem } from "./DeleteItem";

interface ItemProps {
  item: IItem;
  categoryId: string;
}

const measurementUnitOptions = [
  { label: "g", value: "gram" },
  { label: "kg", value: "kilogram" },
  { label: "lb", value: "pound" },
];

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

  return (
    <div key={item._id} className="grid grid-cols-[6fr_1fr_1fr_1fr_50px] group">
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
      <DeleteItem id={item._id} categoryId={categoryId} />
    </div>
  );
};
