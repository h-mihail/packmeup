import dbConnect from "@/lib/db";
import { ListModel } from "@/models/listModel";
import { NextResponse } from "next/server";

export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
): Promise<NextResponse> {
  await dbConnect();

  try {
    const { id } = params;
    const { name } = await request.json();

    if (!id) {
      return NextResponse.json(
        { error: "ID parameter is required!" },
        { status: 400 }
      );
    }

    const updatedList = await ListModel.findByIdAndUpdate(
      id,
      {
        $set: { name },
      },
      { returnOriginal: false }
    );

    if (!updatedList) {
      return NextResponse.json({ error: "Item not found!" }, { status: 404 });
    }

    return NextResponse.json(updatedList);
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
    const { id } = params;

    if (!id) {
      return NextResponse.json(
        { error: "ID parameter is required!" },
        { status: 400 }
      );
    }

    const deletedList = await ListModel.findByIdAndDelete(id);

    if (!deletedList) {
      return NextResponse.json({ error: "Item not found!" }, { status: 404 });
    }

    return NextResponse.json(deletedList);
  } catch (err) {
    console.error(err);
    return NextResponse.json("Server error!", { status: 500 });
  }
}
