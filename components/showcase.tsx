import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const showcaseItems = [
  {
    title: "Ultra-Fast Mountain Generation",
    description: "Created in 0.8 seconds with Nano Banana's optimized neural engine",
    query: "snow-capped mountains at sunset with dramatic clouds",
  },
  {
    title: "Instant Garden Creation",
    description: "Complex scene rendered in milliseconds using Nano Banana technology",
    query: "beautiful japanese zen garden with cherry blossoms",
  },
  {
    title: "Real-time Beach Synthesis",
    description: "Nano Banana delivers photorealistic results at lightning speed",
    query: "tropical beach paradise with crystal clear turquoise water",
  },
  {
    title: "Rapid Aurora Generation",
    description: "Advanced effects processed instantly with Nano Banana AI",
    query: "northern lights aurora borealis over snowy landscape",
  },
]

export function Showcase() {
  return (
    <section id="showcase" className="container mx-auto px-4 py-20 bg-accent/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">Showcase</h2>
          <p className="text-lg text-muted-foreground text-pretty">Lightning-Fast AI Creations</p>
          <p className="text-muted-foreground mt-2 text-pretty">See what Nano Banana generates in milliseconds</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {showcaseItems.map((item, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow bg-card">
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent relative">
                <img
                  src={`/.jpg?height=400&width=600&query=${item.query}`}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
                <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">Nano Banana Speed</Badge>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <p className="text-lg mb-4">Experience the power of Nano Banana yourself</p>
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
            Try Nano Banana Generator
          </Button>
        </div>
      </div>
    </section>
  )
}
