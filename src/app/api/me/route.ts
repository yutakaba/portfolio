import { NextResponse } from "next/server"
import { verifyToken } from "@/lib/jwt"

export async function GET(req: Request) {
  const token = req.headers.get("cookie")?.split("token=")[1]?.split(";")[0]
  if (!token) return NextResponse.json({ error: "No token" }, { status: 401 })

  const payload = verifyToken(token)
  if (!payload) return NextResponse.json({ error: "Invalid token" }, { status: 401 })

  return NextResponse.json({ user: payload })
}
