import { useMemo } from "react";
import { PieChart } from "react-minimal-pie-chart";

import { IList } from "../types";
import { calculateTotalWeight, colors, convertToKilograms } from "../utils";

interface WeightPieChartProps {
  list?: IList;
}

type WeightPieChartData = {
  title: string;
  value: number;
  color: string;
};

export const WeightPieChart: React.FC<WeightPieChartProps> = ({
  list,
}: WeightPieChartProps) => {
  const data = useMemo(() => {
    if (!list) return [];
    return list?.categories.reduce((acc, category, i) => {
      const value = category.items.reduce((acc, item) => {
        const total = calculateTotalWeight(
          item.quantity,
          item.weight,
          item.measurementUnit
        );
        return acc + total;
      }, 0);

      acc.push({
        title: category.name,
        value,
        color: colors[i % colors.length],
      });
      return acc;
    }, [] as WeightPieChartData[]);
  }, [list]);

  return (
    <div className="grid grid-cols-[1fr_2fr] gap-16">
      <PieChart
        lineWidth={50}
        labelPosition={75}
        animate
        data={data}
        label={({ dataEntry }) =>
          `${parseFloat(dataEntry.value.toFixed(2))} kg`
        }
        labelStyle={{
          fontSize: "5px",
          fill: "#fff",
        }}
      />
      <Legend data={data} />
    </div>
  );
};

const Legend = ({ data }: { data: WeightPieChartData[] }) => {
  const totalWeight = data.reduce((acc, cur) => acc + cur.value, 0);
  return (
    <div className="flex flex-col gap-2">
      {data.map((dataEntry) => (
        <div className="flex flex-row align-middle gap-2" key={dataEntry.title}>
          <div
            style={{ backgroundColor: dataEntry.color }}
            className={`w-8 h-4`}
          />
          <div>{`${dataEntry.title}: ${parseFloat(
            dataEntry.value.toFixed(2)
          )} kg`}</div>
        </div>
      ))}
      <div>{`Total weight: ${totalWeight} kg`}</div>
    </div>
  );
};
