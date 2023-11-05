import { NextResponse } from "next/server";

import { db, deleteDoc, doc } from "@/lib/firebase/config";

export async function POST(req: Request, body: { id: string }) {
  try {
    await deleteDoc(doc(db, "cafes", body.id));

    return NextResponse.json({ deleted: true }, { status: 204 });
  } catch (error) {
    console.log("[CAFES_POST_DELETE]", error);
    return new NextResponse("Internal server error.", { status: 500 });
  }
}
