import { NextResponse } from "next/server";
import { supabase } from "@/app/api/preorder/supabaseConnection";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { firstName, lastName, email, phone, comment } = body;

    const { error } = await supabase.from("preorders").insert({
      firstName,
      lastName,
      email,
      phone,
      comment,
    });

    if (error) {
      console.error("Supabase insert error:", error);
      return NextResponse.json({ ok: false, error: error.message }, { status: 500 });
    }

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (e: any) {
    console.error("API /api/preorder error:", e);
    return NextResponse.json({ ok: false, error: "Unexpected error" }, { status: 500 });
  }
}
