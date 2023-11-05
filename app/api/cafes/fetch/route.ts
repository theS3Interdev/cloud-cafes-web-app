import { NextResponse } from "next/server";

import { collection, db, getDocs, orderBy, query } from "@/lib/firebase/config";

export async function GET(req: Request) {
  try {
    const cafesQuery = await query(collection(db, "cafes"), orderBy("name"));

    const cafesSnapshot = await getDocs(cafesQuery);

    const cafes = cafesSnapshot.docs.map((doc) => {
      return { id: doc.id, ...doc.data() };
    });

    return NextResponse.json(cafes, { status: 200 });
  } catch (error) {
    console.log("[CAFES_GET]", error);
    return new NextResponse("Internal server error.", { status: 500 });
  }
}
