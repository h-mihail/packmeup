import React from "react";

import { IItem } from "../types";

interface ItemsProps {
  items: IItem[];
}

export const Items: React.FC<ItemsProps> = ({ items }) => {
  return (
    <div className="grid grid-cols-4">
      <div className="font-light text-sm">Name</div>
      <div className="font-light text-sm">Weight</div>
      <div className="font-light text-sm">Unit</div>
      <div className="font-light text-sm">Quantity</div>
      {items.map((item) => (
        <React.Fragment key={item._id}>
          <div>{item.name}</div>
          <div>{item.weight ?? 0}</div>
          <div>{item.measurementUnit}</div>
          <div>{item.quantity ?? 1}</div>
        </React.Fragment>
      ))}
    </div>
  );
};
