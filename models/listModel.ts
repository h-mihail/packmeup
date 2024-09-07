import { Types, Document, Schema, model, models } from "mongoose";
import { categorySchema, ICategory } from "./categoryModel";

export interface IList extends Document {
  _id: Types.ObjectId;
  name: String;
  categories: [ICategory];
}

export const listSchema = new Schema<IList>(
  {
    name: { type: String, required: false },
    categories: { type: [categorySchema], required: false, default: [] },
  },
  { collection: "list" }
);

export const ListModel = models["List"] || model<IList>("List", listSchema);
