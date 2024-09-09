import { Types, Document, Schema, model, models } from "mongoose";

enum MeasurementUnit {
  gram = "gram",
  kilogram = "kilogram",
  pound = "pount",
}

export interface IItem extends Document {
  _id: Types.ObjectId;
  name: String;
  weight: Number;
  measurementUnit: String;
  quantity: Number;
  isWorn: Boolean;
}

export const itemSchema = new Schema<IItem>(
  {
    name: { type: String, required: false, default: "New item" },
    weight: { type: Number, required: false, default: 0 },
    measurementUnit: {
      type: String,
      enum: Object.values(MeasurementUnit),
      required: false,
      default: MeasurementUnit.kilogram,
    },
    quantity: { type: Number, required: false, default: 1 },
    isWorn: { type: Boolean, required: false, default: false },
  },
  { collection: "item" }
);

export const ItemModel = models["Item"] || model<IItem>("Item", itemSchema);
