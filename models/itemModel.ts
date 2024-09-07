import { Types, Document, Schema, model, models } from "mongoose";

export interface IItem extends Document {
  _id: Types.ObjectId;
  name: String;
}

export const itemSchema = new Schema<IItem>(
  { name: { type: String, required: false } },
  { collection: "item" }
);

export const ItemModel = models["Item"] || model<IItem>("Item", itemSchema);
