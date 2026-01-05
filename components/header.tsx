import { Button } from "@/components/ui/button"
import { AuthControls } from "@/components/auth-controls"
import Link from "next/link"

export function Header() {
  return (
    <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center gap-4">
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <span className="text-2xl">🍌</span>
          <span className="text-xl font-bold text-balance">Nano Banana</span>
        </Link>
        <nav className="hidden md:flex flex-1 items-center justify-center gap-6 min-w-0">
          <Link href="/#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Features
          </Link>
          <Link href="/#showcase" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Examples
          </Link>
          <Link href="/#reviews" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Reviews
          </Link>
          <Link href="/#faq" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            FAQ
          </Link>
          <Link href="/pricing" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Pricing
          </Link>
        </nav>
        <div className="flex items-center gap-3 shrink-0">
          <AuthControls />
          <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
            <Link href="/#editor">Try Now</Link>
          </Button>
        </div>
      </div>
    </header>
  )
}
