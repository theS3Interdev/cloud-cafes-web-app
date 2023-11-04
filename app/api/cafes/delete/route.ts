import { NextResponse } from "next/server";

import { db, deleteDoc, doc } from "@/lib/firebase/config";

export async function DELETE(req: Request, id: string) {
  try {
    const cafe = await deleteDoc(doc(db, "cafes", id));

    return NextResponse.json(cafe);
  } catch (error) {
    console.log("[CAFES_DELETE]", error);
    return new NextResponse("Internal server error.", { status: 500 });
  }
}
