export interface IList {
  _id: string;
  name: string;
  categories: ICategory[];
}

export interface ICategory {
  _id: string;
  name: string;
}
