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
