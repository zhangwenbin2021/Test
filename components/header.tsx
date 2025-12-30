import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-2xl">🍌</span>
          <span className="text-xl font-bold text-balance">Nano Banana</span>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Features
          </a>
          <a href="#showcase" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Examples
          </a>
          <a href="#reviews" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Reviews
          </a>
          <a href="#faq" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            FAQ
          </a>
        </nav>
        <Button className="bg-primary text-primary-foreground hover:bg-primary/90">Try Now</Button>
      </div>
    </header>
  )
}
