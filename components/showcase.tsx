import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Image from "next/image"

import gardenImage from "@/components/images/beautiful-garden-with-flowers.jpg"
import mountainImage from "@/components/images/mountain-sunset-vista.png"
import northernLightsImage from "@/components/images/northern-lights.png"
import beachImage from "@/components/images/tropical-beach-paradise.png"

const showcaseItems = [
  {
    title: "Mountain Sunset",
    description: "A cinematic landscape edit guided by a simple text prompt.",
    query: "snow-capped mountains at sunset with dramatic clouds",
    image: mountainImage,
  },
  {
    title: "Garden Scene",
    description: "A vibrant garden scene showing color, depth, and detail.",
    query: "beautiful japanese zen garden with cherry blossoms",
    image: gardenImage,
  },
  {
    title: "Beach Paradise",
    description: "A sunny beach scene with clear water and natural lighting.",
    query: "tropical beach paradise with crystal clear turquoise water",
    image: beachImage,
  },
  {
    title: "Northern Lights",
    description: "Night sky effects like auroras and snow landscapes.",
    query: "northern lights aurora borealis over snowy landscape",
    image: northernLightsImage,
  },
]

export function Showcase() {
  return (
    <section id="showcase" className="container mx-auto px-4 py-20 bg-accent/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">Showcase</h2>
          <p className="text-lg text-muted-foreground text-pretty">Lightning-Fast AI Creations</p>
          <p className="text-muted-foreground mt-2 text-pretty">See example outputs created with CodeZS</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {showcaseItems.map((item, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow bg-card">
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent relative">
                <Image src={item.image} alt={item.title} fill className="object-cover" priority={index === 0} />
                <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">Example</Badge>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <p className="text-lg mb-4">Try it with your own image</p>
          <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
            <a href="#editor">Open Editor</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
