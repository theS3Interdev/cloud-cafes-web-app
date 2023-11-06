import { NextResponse } from "next/server";

import { auth } from "@clerk/nextjs";

import prismadb from "@/lib/utils/prismadb";

export async function POST(req: Request) {
  try {
    const { userId } = auth();

    if (!userId) {
      return new NextResponse("Unauthenticated.", { status: 401 });
    }

    const body = await req.json();

    const { name, city } = body;

    const cafe = await prismadb.cafe.create({
      data: { name: name, city: city, userId: userId },
    });

    return NextResponse.json(cafe, { status: 200 });
  } catch (error) {
    console.log("[CAFE_POST]", error);
    return new NextResponse("Internal server error.", { status: 500 });
  }
}
