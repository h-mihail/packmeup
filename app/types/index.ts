export interface IList {
  _id: string;
  name: string;
  categories: ICategory[];
}

export interface ICategory {
  _id: string;
  name: string;
  items: IItem[];
}

export interface IItem {
  _id: string;
  name: string;
  weight: number;
  measurementUnit: MeasurementUnit;
  quantity: number;
  isWorn: boolean;
}

export enum MeasurementUnit {
  gram = "gram",
  kilogram = "kilogram",
  pound = "pound",
}
