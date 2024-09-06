import mongoose from "mongoose";

const listSchema = new mongoose.Schema(
  { name: { type: String, required: false } },
  { collection: "list" }
);

export const ListModel =
  mongoose.models["List"] || mongoose.model("List", listSchema);
