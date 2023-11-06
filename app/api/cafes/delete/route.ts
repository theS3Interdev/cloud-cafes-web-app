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

    const { id } = body;

    const cafe = await prismadb.cafe.delete({
      where: {
        id: id,
      },
    });

    return NextResponse.json(cafe);
  } catch (error) {
    console.log("[CAFES_DELETE]", error);
    return new NextResponse("Internal server error.", { status: 500 });
  }
}
