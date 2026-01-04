import { Button } from "@/components/ui/button"

type LoginPageProps = {
  searchParams?: {
    error?: string
    next?: string
  }
}

export default function LoginPage({ searchParams }: LoginPageProps) {
  const next = typeof searchParams?.next === "string" ? searchParams.next : "/"
  const error = typeof searchParams?.error === "string" ? searchParams.error : null

  return (
    <main className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-md space-y-6 border border-border rounded-xl p-6 bg-card">
        <div className="space-y-2">
          <h1 className="text-2xl font-bold">Sign in</h1>
          <p className="text-sm text-muted-foreground">Use Google to sign in via Supabase Auth.</p>
        </div>

        {error ? <p className="text-sm text-destructive">{error}</p> : null}

        <Button asChild className="w-full">
          <a href={`/auth/signin?provider=google&next=${encodeURIComponent(next)}`}>Continue with Google</a>
        </Button>

        <p className="text-xs text-muted-foreground">
          After signing in, you will be redirected back to <span className="font-medium">{next}</span>.
        </p>
      </div>
    </main>
  )
}

