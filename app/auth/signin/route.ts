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
  const provider = requestUrl.searchParams.get("provider")
  const next = safeNextPath(requestUrl.searchParams.get("next"))

  if (provider !== "google") {
    return NextResponse.json({ error: { message: "Unsupported provider." } }, { status: 400 })
  }

  const origin = getRequestOrigin(request)

  let supabase: Awaited<ReturnType<typeof createClient>>
  try {
    supabase = await createClient()
  } catch (err) {
    const message = err instanceof Error ? err.message : "Missing Supabase env vars."
    return NextResponse.redirect(`${origin}/login?error=${encodeURIComponent(message)}`)
  }

  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      redirectTo: `${origin}/auth/callback?next=${encodeURIComponent(next)}`,
      queryParams: {
        access_type: "offline",
        prompt: "consent",
      },
    },
  })

  if (error || !data?.url) {
    const message = error?.message || "Failed to start OAuth flow."
    return NextResponse.redirect(`${origin}/login?error=${encodeURIComponent(message)}`)
  }

  return NextResponse.redirect(data.url)
}
