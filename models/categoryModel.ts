import { Types, Document, Schema, model, models } from "mongoose";
import { IItem, itemSchema } from "./itemModel";

export interface ICategory extends Document {
  _id: Types.ObjectId;
  name: String;
  items: [IItem];
}

export const categorySchema = new Schema<ICategory>(
  {
    name: { type: String, required: false },
    items: { type: [itemSchema], required: false, default: [] },
  },
  { collection: "category" }
);

export const CategoryModel =
  models["Category"] || model<ICategory>("Category", categorySchema);
