import mongoose from "mongoose";

export const categorySchema = new mongoose.Schema(
  { name: { type: String, required: false } },
  { collection: "category" }
);

export const CategoryModel =
  mongoose.models["Category"] || mongoose.model("Category", categorySchema);
