import { createClient } from "@/lib/supabase/server"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export async function AuthControls() {
  let user: { email?: string | null } | null = null

  try {
    const supabase = await createClient()
    const res = await supabase.auth.getUser()
    user = res.data.user
  } catch {
    return null
  }

  if (!user) {
    return (
      <Button asChild variant="secondary">
        <a href="/login">Sign in</a>
      </Button>
    )
  }

  return (
    <div className="flex items-center gap-3">
      <span className="hidden xl:block text-sm text-muted-foreground max-w-40 truncate">{user.email}</span>
      <Link
        href="/contact"
        className="hidden md:inline text-sm text-muted-foreground hover:text-foreground transition-colors"
      >
        Support
      </Link>
      <form action="/auth/signout" method="post">
        <Button type="submit" variant="outline" className="bg-transparent">
          Sign out
        </Button>
      </form>
    </div>
  )
}
