import { NextResponse } from "next/server"
import { signToken } from "@/lib/jwt"

export async function POST(req: Request) {
  const { email, password } = await req.json()

  // 簡易的に固定ユーザーで認証（実際はDB照合）
  if (email === "test@example.com" && password === "password") {
    const token = signToken({ email })

    const res = NextResponse.json({ ok: true })
    res.cookies.set("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      path: "/",
      maxAge: 60 * 60,
    })

    return res
  }

  return NextResponse.json({ error: "Invalid credentials" }, { status: 401 })
}
