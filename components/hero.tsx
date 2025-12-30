import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export function Hero() {
  return (
    <section className="container mx-auto px-4 py-20 md:py-32">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <Badge variant="secondary" className="text-sm px-4 py-1.5">
          🍌 The AI model that outperforms Flux Kontext
        </Badge>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-balance leading-tight">Nano Banana</h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
          Transform any image with simple text prompts. Nano-banana's advanced model delivers consistent character
          editing and scene preservation that surpasses Flux Kontext. Experience the future of AI image editing.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-base px-8">
            Start Editing
          </Button>
          <Button size="lg" variant="outline" className="text-base px-8 bg-transparent">
            View Examples
          </Button>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6 pt-8 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <span className="text-primary">✓</span>
            <span>One-shot editing</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-primary">✓</span>
            <span>Multi-image support</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-primary">✓</span>
            <span>Natural language</span>
          </div>
        </div>
      </div>
    </section>
  )
}
