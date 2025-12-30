"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Upload, Sparkles } from "lucide-react"

export function EditorSection() {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null)
  const [prompt, setPrompt] = useState("")

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        setUploadedImage(e.target?.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <section id="editor" className="container mx-auto px-4 py-20 bg-accent/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">Get Started</h2>
          <p className="text-lg text-muted-foreground text-pretty">Try The AI Editor</p>
          <p className="text-muted-foreground mt-2 text-pretty">
            Experience the power of nano-banana's natural language image editing. Transform any photo with simple text
            commands
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Upload Section */}
          <Card className="p-6 space-y-6 bg-card">
            <div>
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-primary" />
                Prompt Engine
              </h3>
              <p className="text-sm text-muted-foreground mb-6">Transform your image with AI-powered editing</p>
            </div>

            <div className="space-y-4">
              <div>
                <Label htmlFor="image-upload" className="text-sm font-medium mb-2 block">
                  Reference Image
                </Label>
                <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary transition-colors cursor-pointer">
                  <input
                    id="image-upload"
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleImageUpload}
                  />
                  <label htmlFor="image-upload" className="cursor-pointer">
                    {uploadedImage ? (
                      <div className="space-y-2">
                        <img
                          src={uploadedImage || "/placeholder.svg"}
                          alt="Uploaded"
                          className="max-h-48 mx-auto rounded-lg"
                        />
                        <p className="text-sm text-muted-foreground">Click to change image</p>
                      </div>
                    ) : (
                      <div className="space-y-2">
                        <Upload className="w-12 h-12 mx-auto text-muted-foreground" />
                        <p className="text-sm font-medium">Add Image</p>
                        <p className="text-xs text-muted-foreground">Max 10MB</p>
                      </div>
                    )}
                  </label>
                </div>
              </div>

              <div>
                <Label htmlFor="prompt" className="text-sm font-medium mb-2 block">
                  Main Prompt
                </Label>
                <Textarea
                  id="prompt"
                  placeholder="Describe your desired edits... e.g., 'place the person in a snowy mountain scene'"
                  className="min-h-32 resize-none"
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                />
              </div>

              <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90" size="lg">
                Generate Now
              </Button>
            </div>
          </Card>

          {/* Output Section */}
          <Card className="p-6 space-y-6 bg-card">
            <div>
              <h3 className="text-xl font-semibold mb-4">Output Gallery</h3>
              <p className="text-sm text-muted-foreground">Your ultra-fast AI creations appear here instantly</p>
            </div>

            <div className="border-2 border-dashed border-border rounded-lg p-12 flex flex-col items-center justify-center min-h-80 text-center">
              <Sparkles className="w-16 h-16 text-muted-foreground/50 mb-4" />
              <p className="text-lg font-medium mb-2">Ready for instant generation</p>
              <p className="text-sm text-muted-foreground">Enter your prompt and unleash the power</p>
            </div>
          </Card>
        </div>

        <div className="text-center mt-8">
          <p className="text-sm text-muted-foreground">Want more powerful image generation features?</p>
          <Button variant="link" className="text-primary">
            Visit Full Generator →
          </Button>
        </div>
      </div>
    </section>
  )
}
