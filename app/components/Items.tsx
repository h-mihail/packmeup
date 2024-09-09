import React from "react";

import { IItem } from "../types";
import { Item } from "./Item";

interface ItemsProps {
  items: IItem[];
  categoryId: string;
}

export const Items: React.FC<ItemsProps> = ({ items, categoryId }) => {
  return (
    <div>
      <div className="grid grid-cols-[6fr_1fr_1fr_1fr_50px]">
        <div className="font-light text-sm">Name</div>
        <div className="font-light text-sm">Quantity</div>
        <div className="font-light text-sm">Weight</div>
        <div className="font-light text-sm">Unit</div>
        <div></div>
      </div>
      <div>
        {items.map((item) => (
          <Item key={item._id} item={item} categoryId={categoryId} />
        ))}
      </div>
    </div>
  );
};
