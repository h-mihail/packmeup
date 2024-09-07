import dbConnect from "@/lib/db";
import { NextResponse } from "next/server";
import { IItem } from "@/models/itemModel";
import { ListModel } from "@/models/listModel";
import { ICategory } from "@/models/categoryModel";

export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
): Promise<NextResponse> {
  await dbConnect();

  try {
    const { id: itemId } = params;
    const { name, listId, categoryId } = await request.json();

    const result = await ListModel.updateOne(
      {
        _id: listId,
        "categories._id": categoryId,
        "categories.items._id": itemId,
      },
      {
        $set: {
          "categories.$[category].items.$[item].name": name,
        },
      },
      {
        arrayFilters: [{ "category._id": categoryId }, { "item._id": itemId }],
      }
    );

    if (result.modifiedCount === 0) {
      return NextResponse.json({ error: "Item not found!" }, { status: 404 });
    }

    const updatedList = await ListModel.findById(listId);
    const updatedCategory = updatedList.categories.find((cat: ICategory) =>
      cat._id.equals(categoryId)
    );
    const updatedItem = updatedCategory.items.find((item: IItem) =>
      item._id.equals(itemId)
    );

    return NextResponse.json(updatedItem);
  } catch (err) {
    console.error(err);
    return NextResponse.json("Server error!", { status: 500 });
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
): Promise<NextResponse> {
  await dbConnect();

  try {
    const { id: itemId } = params;
    const { listId, categoryId } = await request.json();

    const result = await ListModel.updateOne(
      {
        _id: listId,
        "categories._id": categoryId,
      },
      {
        $pull: {
          "categories.$.items": {
            _id: itemId,
          },
        },
      }
    );

    if (result.modifiedCount === 0) {
      return NextResponse.json({ error: "Item not found!" }, { status: 404 });
    }

    return NextResponse.json({ message: "Deleted!" }, { status: 200 });
  } catch (err) {
    console.error(err);
    return NextResponse.json("Server error!", { status: 500 });
  }
}
