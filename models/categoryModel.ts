import { Types, Document, Schema, model, models } from "mongoose";

export interface ICategory extends Document {
  _id: Types.ObjectId;
  name: String;
}

export const categorySchema = new Schema<ICategory>(
  { name: { type: String, required: false } },
  { collection: "category" }
);

export const CategoryModel =
  models["Category"] || model<ICategory>("Category", categorySchema);
