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
  name: String;
  weight: Number;
  measurementUnit: String;
  quantity: Number;
  isWorn: Boolean;
}
