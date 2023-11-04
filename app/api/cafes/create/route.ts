import { NextResponse } from "next/server";

import { addDoc, collection, db } from "@/lib/firebase/config";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { name, city } = body;

    const cafe = await addDoc(collection(db, "cafes"), {
      name: name,
      city: city,
    });

    return NextResponse.json(cafe);
  } catch (error) {
    console.log("[CAFE_POST]", error);
    return new NextResponse("Internal server error.", { status: 500 });
  }
}
