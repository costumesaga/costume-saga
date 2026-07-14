import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { error } = await supabase.from("orders").insert([
      {
        customer_name: body.fullName,
        phone: body.phone,
        email: body.email,
        address: body.address,
        city: body.city,
        state: body.state,
        pincode: body.pincode,
        total: body.total,
        payment_status: "Pending",
        order_status: "New",
      },
    ]);

    if (error) {
      return NextResponse.json(
        { success: false, error: error.message },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { success: false, error: "Server Error" },
      { status: 500 }
    );
  }
}