import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check } from "lucide-react"

export function Hero() {
  return (
    <section className="container mx-auto px-4 py-20 md:py-32">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <Badge variant="secondary" className="text-sm px-4 py-1.5">
          AI image editing with text prompts
        </Badge>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-balance leading-tight">CodeZS</h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
          Upload an image, describe the edit you want, and generate results. Designed for common edits like background
          changes, object additions, and style adjustments.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-base px-8">
            <a href="#editor">Start Editing</a>
          </Button>
          <Button asChild size="lg" variant="outline" className="text-base px-8 bg-transparent">
            <a href="#showcase">View Examples</a>
          </Button>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6 pt-8 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Check className="size-4 text-primary" />
            <span>Text-guided edits</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="size-4 text-primary" />
            <span>Preserve key details</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="size-4 text-primary" />
            <span>Download results</span>
          </div>
        </div>
      </div>
    </section>
  )
}

