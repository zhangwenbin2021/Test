import { createClient } from "@/lib/supabase/server"
import { Button } from "@/components/ui/button"

export async function AuthControls() {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    return (
      <Button asChild variant="secondary">
        <a href="/login">Sign in</a>
      </Button>
    )
  }

  return (
    <div className="flex items-center gap-3">
      <span className="hidden sm:block text-sm text-muted-foreground max-w-48 truncate">{user.email}</span>
      <form action="/auth/signout" method="post">
        <Button type="submit" variant="outline" className="bg-transparent">
          Sign out
        </Button>
      </form>
    </div>
  )
}

