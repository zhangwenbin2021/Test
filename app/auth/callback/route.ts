import { NextResponse, type NextRequest } from "next/server"
import { createClient } from "@/lib/supabase/server"
import { getRequestOrigin } from "@/lib/request-origin"

function safeNextPath(next: string | null) {
  if (!next) return "/"
  if (!next.startsWith("/")) return "/"
  return next
}

export async function GET(request: NextRequest) {
  const requestUrl = new URL(request.url)
  const code = requestUrl.searchParams.get("code")
  const next = safeNextPath(requestUrl.searchParams.get("next"))
  const origin = getRequestOrigin(request)

  if (code) {
    try {
      const supabase = await createClient()
      await supabase.auth.exchangeCodeForSession(code)
    } catch {
      return NextResponse.redirect(`${origin}/login?error=${encodeURIComponent("Auth callback failed.")}`)
    }
  }

  return NextResponse.redirect(`${origin}${next}`)
}
