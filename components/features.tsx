import { Card } from "@/components/ui/card"
import { MessageSquare, Users, ImageIcon, Zap, Layers, Sparkles } from "lucide-react"

const features = [
  {
    icon: MessageSquare,
    title: "Natural Language Editing",
    description:
      "Edit images using simple text prompts. Describe changes in plain language.",
  },
  {
    icon: Users,
    title: "Character Consistency",
    description:
      "Helps preserve important details (like faces) across edits when possible.",
  },
  {
    icon: ImageIcon,
    title: "Scene Preservation",
    description: "Designed to keep the overall scene coherent while applying your requested changes.",
  },
  {
    icon: Zap,
    title: "One-Shot Editing",
    description:
      "Generate an edited result in one click, then iterate if you want refinements.",
  },
  {
    icon: Layers,
    title: "Multi-Image Context",
    description: "Process multiple images simultaneously. Support for advanced multi-image editing workflows",
  },
  {
    icon: Sparkles,
    title: "AI UGC Creation",
    description: "Create assets for social media and marketing workflows (results vary by prompt and input).",
  },
]

export function Features() {
  return (
    <section id="features" className="container mx-auto px-4 py-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">Core Features</h2>
          <p className="text-lg text-muted-foreground text-pretty">Why Choose CodeZS?</p>
          <p className="text-muted-foreground mt-2 max-w-3xl mx-auto text-pretty">
            A practical AI image editor for everyday edits, with clear pricing, reachable support, and transparent
            policies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow bg-card">
              <feature.icon className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
