import dbConnect from "@/lib/db";
import { NextResponse } from "next/server";
import { ListModel } from "@/models/listModel";
import { ICategory } from "@/models/categoryModel";

export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
): Promise<NextResponse> {
  await dbConnect();

  try {
    const { id: categoryId } = params;
    const { name, listId } = await request.json();

    const result = await ListModel.updateOne(
      { _id: listId, "categories._id": categoryId },
      {
        $set: {
          "categories.$.name": name,
        },
      },
      { returnOriginal: false }
    );

    if (result.modifiedCount === 0) {
      return NextResponse.json({ error: "Item not found!" }, { status: 404 });
    }

    const updatedList = await ListModel.findById(listId);

    const newCategory = updatedList.categories.find((cat: ICategory) =>
      cat._id.equals(categoryId)
    );

    return NextResponse.json(newCategory);
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
    const { id: categoryId } = params;
    const { listId } = await request.json();

    const result = await ListModel.updateOne(
      { _id: listId, "categories._id": categoryId },
      {
        $pull: {
          categories: {
            _id: categoryId,
          },
        },
      },
      { returnOriginal: false }
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
