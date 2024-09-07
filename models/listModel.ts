import mongoose from "mongoose";
import { categorySchema } from "./categoryModel";

export const listSchema = new mongoose.Schema(
  {
    name: { type: String, required: false },
    categories: { type: [categorySchema], required: false, default: [] },
  },
  { collection: "list" }
);

export const ListModel =
  mongoose.models["List"] || mongoose.model("List", listSchema);
