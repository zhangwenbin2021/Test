import { NextResponse } from "next/server"
import { createClient } from "@/lib/supabase/server"

export async function POST(request: Request) {
  const supabase = await createClient()
  await supabase.auth.signOut()

  const requestUrl = new URL(request.url)
  const forwardedProto = request.headers.get("x-forwarded-proto")
  const forwardedHost = request.headers.get("x-forwarded-host")
  const host = request.headers.get("host")
  const origin = forwardedHost ? `${forwardedProto || "https"}://${forwardedHost}` : host ? `${forwardedProto || "http"}://${host}` : requestUrl.origin

  return NextResponse.redirect(`${origin}/`, { status: 302 })
}
