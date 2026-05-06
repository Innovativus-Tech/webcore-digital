import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, company, sessionId } = body as {
      name: string;
      email: string;
      company: string;
      sessionId?: string;
    };

    if (!name?.trim() || !email?.trim() || !company?.trim()) {
      return NextResponse.json({ error: "name, email, and company are required" }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email address" }, { status: 400 });
    }

    const lead = await prisma.lead.create({
      data: { name: name.trim(), email: email.trim().toLowerCase(), company: company.trim(), sessionId },
    });

    return NextResponse.json({ ok: true, id: lead.id }, { status: 201 });
  } catch (err) {
    console.error("[/api/lead]", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
