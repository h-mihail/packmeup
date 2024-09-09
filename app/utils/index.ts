import tColors from "tailwindcss/colors";

import { MeasurementUnit } from "../types";

export const colors = [
  tColors.green[500],
  tColors.blue[500],
  tColors.indigo[500],
  tColors.violet[500],
  tColors.purple[500],
  tColors.fuchsia[500],
  tColors.pink[500],
  tColors.rose[500],
  tColors.red[500],
  tColors.orange[500],
  tColors.amber[500],
  tColors.yellow[500],
  tColors.lime[500],
];

export const convertToKilograms = (
  amount: number,
  type: MeasurementUnit
): number => {
  switch (type) {
    case "gram":
      return amount / 1000;
    case "kilogram":
      return amount;
    case "pound":
      return amount * 0.453592;
    default:
      throw new Error("Invalid type.");
  }
};

export const calculateTotalWeight = (
  quantity: number,
  weight: number,
  measurementUnit: MeasurementUnit
) => {
  const total = quantity * convertToKilograms(weight, measurementUnit);
  return Math.round(total * 100) / 100;
};
