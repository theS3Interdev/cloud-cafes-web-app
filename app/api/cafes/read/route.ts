import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";

import prismadb from "@/lib/utils/prismadb";

export async function GET(req: Request) {
  try {
    const { userId } = auth();

    if (!userId) {
      return new NextResponse("Unauthenticated.", { status: 401 });
    }

    const cafes = await prismadb.cafe.findMany({
      where: {
        userId: userId,
      },
      orderBy: {
        name: "asc",
      },
    });

    return NextResponse.json(cafes, { status: 200 });
  } catch (error) {
    console.log("[CAFES_GET]", error);
    return new NextResponse("Internal server error.", { status: 500 });
  }
}
