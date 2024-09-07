import dbConnect from "@/lib/db";
import { ObjectId } from "mongodb";
import { IItem } from "@/models/itemModel";
import { NextResponse } from "next/server";
import { ListModel } from "@/models/listModel";
import { ICategory } from "@/models/categoryModel";

export async function POST(request: Request): Promise<NextResponse> {
  await dbConnect();

  try {
    const { name, listId, categoryId } = await request.json();
    const itemId = new ObjectId();

    const result = await ListModel.updateOne(
      { _id: listId, "categories._id": categoryId },
      {
        $push: {
          "categories.$.items": {
            _id: itemId,
            name,
          },
        },
      }
    );

    if (result.modifiedCount === 0) {
      return NextResponse.json({ error: "Item not found!" }, { status: 404 });
    }

    const updatedList = await ListModel.findById(listId);
    const updatedCategory = updatedList.categories.find((cat: ICategory) =>
      cat._id.equals(categoryId)
    );
    const newItem = updatedCategory.items.find((item: IItem) =>
      item._id.equals(itemId)
    );

    return NextResponse.json(newItem);
  } catch (err) {
    console.error(err);
    return NextResponse.json("Server error!", { status: 500 });
  }
}
