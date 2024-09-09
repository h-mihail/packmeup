import { useContext } from "react";

import { Tooltip } from "./Tooltip";
import { Categories } from "./Categories";
import { WeightPieChart } from "./WeightPieChart";
import { IListContext, ListContext } from "../providers/listProvider";

export const ListDetails = () => {
  const { selectedList } = useContext(ListContext) as IListContext;
  const hasItems = selectedList?.categories?.[0]?.items?.[0] !== undefined;

  return (
    <div className="flex flex-col gap-8 justify-center align-middle p-8">
      <h1 className="text-2xl">{selectedList?.name}</h1>
      {hasItems ? <WeightPieChart list={selectedList} /> : <Tooltip />}
      <Categories />
    </div>
  );
};
