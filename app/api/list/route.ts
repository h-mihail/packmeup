import dbConnect from "@/lib/db";
import { ListModel } from "@/models/listModel";
import { NextResponse } from "next/server";

export async function POST(request: Request): Promise<NextResponse> {
  await dbConnect();

  try {
    const { name } = await request.json();
    const newList = await ListModel.create({ name });

    return NextResponse.json(newList);
  } catch (err) {
    console.error(err);
    return NextResponse.json("Server error!", { status: 500 });
  }
}

export async function GET(): Promise<NextResponse> {
  await dbConnect();

  try {
    const lists = await ListModel.find();

    return NextResponse.json(lists);
  } catch (err) {
    console.error(err);
    return NextResponse.json("Server error!", { status: 500 });
  }
}

export async function PATCH(request: Request): Promise<NextResponse> {
  await dbConnect();

  try {
    const { id, name } = await request.json();
    const updatedList = await ListModel.findByIdAndUpdate(
      id,
      {
        $set: { name },
      },
      { returnOriginal: false }
    );

    return NextResponse.json(updatedList);
  } catch (err) {
    console.error(err);
    return NextResponse.json("Server error!", { status: 500 });
  }
}

export async function DELETE(request: Request): Promise<NextResponse> {
  await dbConnect();

  try {
    const { id } = await request.json();
    const deletedList = await ListModel.findByIdAndDelete(id);

    return NextResponse.json(deletedList);
  } catch (err) {
    console.error(err);
    return NextResponse.json("Server error!", { status: 500 });
  }
}
