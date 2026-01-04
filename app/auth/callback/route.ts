import { NextResponse, type NextRequest } from "next/server"
import { createClient } from "@/lib/supabase/server"

function safeNextPath(next: string | null) {
  if (!next) return "/"
  if (!next.startsWith("/")) return "/"
  return next
}

export async function GET(request: NextRequest) {
  const requestUrl = new URL(request.url)
  const code = requestUrl.searchParams.get("code")
  const next = safeNextPath(requestUrl.searchParams.get("next"))

  if (code) {
    try {
      const supabase = await createClient()
      await supabase.auth.exchangeCodeForSession(code)
    } catch {
      return NextResponse.redirect(`${requestUrl.origin}/login?error=${encodeURIComponent("Auth callback failed.")}`)
    }
  }

  const forwardedHost = request.headers.get("x-forwarded-host")
  const isDev = process.env.NODE_ENV === "development"

  if (isDev) {
    return NextResponse.redirect(`${requestUrl.origin}${next}`)
  }

  if (forwardedHost) {
    return NextResponse.redirect(`https://${forwardedHost}${next}`)
  }

  return NextResponse.redirect(`${requestUrl.origin}${next}`)
}
