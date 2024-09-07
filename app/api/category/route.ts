import dbConnect from "@/lib/db";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";
import { ListModel } from "@/models/listModel";
import { ICategory } from "@/models/categoryModel";

export async function POST(request: Request): Promise<NextResponse> {
  await dbConnect();

  try {
    const { name, listId } = await request.json();
    const categoryId = new ObjectId();

    const result = await ListModel.updateOne(
      {
        _id: listId,
      },
      {
        $push: {
          categories: {
            _id: categoryId,
            name,
          },
        },
      }
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
