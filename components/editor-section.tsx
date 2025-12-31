"use client"

import type React from "react"

import { useEffect, useMemo, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Spinner } from "@/components/ui/spinner"
import { Textarea } from "@/components/ui/textarea"
import { Sparkles, Upload } from "lucide-react"

export function EditorSection() {
  const [imageFile, setImageFile] = useState<File | null>(null)
  const [prompt, setPrompt] = useState("")
  const [outputImages, setOutputImages] = useState<string[]>([])
  const [isGenerating, setIsGenerating] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const previewUrl = useMemo(() => {
    if (!imageFile) return null
    return URL.createObjectURL(imageFile)
  }, [imageFile])

  useEffect(() => {
    if (!previewUrl) return
    return () => URL.revokeObjectURL(previewUrl)
  }, [previewUrl])

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    setError(null)
    setOutputImages([])
    setImageFile(file)
  }

  const canGenerate = Boolean(imageFile) && prompt.trim().length > 0 && !isGenerating

  const handleGenerate = async () => {
    if (!imageFile) {
      setError("Please upload an image first.")
      return
    }

    const trimmedPrompt = prompt.trim()
    if (trimmedPrompt.length === 0) {
      setError("Please enter a prompt.")
      return
    }

    setIsGenerating(true)
    setError(null)
    setOutputImages([])

    try {
      const form = new FormData()
      form.append("image", imageFile)
      form.append("prompt", trimmedPrompt)

      const res = await fetch("/api/edit", {
        method: "POST",
        body: form,
      })

      const json = await res.json().catch(() => null)
      if (!res.ok) {
        const message = json?.error?.message || "Generation failed."
        throw new Error(message)
      }

      const images = Array.isArray(json?.images) ? (json.images as string[]) : []
      if (images.length === 0) throw new Error("No output returned.")

      setOutputImages(images)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Generation failed.")
    } finally {
      setIsGenerating(false)
    }
  }

  return (
    <section id="editor" className="container mx-auto px-4 py-20 bg-accent/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">Get Started</h2>
          <p className="text-lg text-muted-foreground text-pretty">Try The AI Editor</p>
          <p className="text-muted-foreground mt-2 text-pretty">
            Experience the power of nano-banana&apos;s natural language image editing. Transform any photo with simple
            text commands
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
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
                    {previewUrl ? (
                      <div className="space-y-2">
                        <img src={previewUrl} alt="Uploaded" className="max-h-48 mx-auto rounded-lg" />
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

              {error ? <p className="text-sm text-destructive">{error}</p> : null}

              <Button
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                size="lg"
                onClick={handleGenerate}
                disabled={!canGenerate}
              >
                {isGenerating ? (
                  <>
                    <Spinner className="size-5" />
                    Generating...
                  </>
                ) : (
                  "Generate Now"
                )}
              </Button>
            </div>
          </Card>

          <Card className="p-6 space-y-6 bg-card">
            <div>
              <h3 className="text-xl font-semibold mb-4">Output Gallery</h3>
              <p className="text-sm text-muted-foreground">Your ultra-fast AI creations appear here instantly</p>
            </div>

            {outputImages.length > 0 ? (
              <div className="space-y-4">
                <img src={outputImages[0]} alt="Generated" className="w-full rounded-lg border border-border" />
                <div className="flex items-center justify-between gap-3">
                  <Button
                    variant="secondary"
                    onClick={() => {
                      setOutputImages([])
                      setError(null)
                    }}
                  >
                    Clear
                  </Button>
                  <Button asChild>
                    <a href={outputImages[0]} download="nano-banana.png">
                      Download
                    </a>
                  </Button>
                </div>
              </div>
            ) : (
              <div className="border-2 border-dashed border-border rounded-lg p-12 flex flex-col items-center justify-center min-h-80 text-center">
                <Sparkles className="w-16 h-16 text-muted-foreground/50 mb-4" />
                <p className="text-lg font-medium mb-2">Ready for instant generation</p>
                <p className="text-sm text-muted-foreground">Upload an image, enter a prompt, then click Generate</p>
              </div>
            )}
          </Card>
        </div>

        <div className="text-center mt-8">
          <p className="text-sm text-muted-foreground">Want more powerful image generation features?</p>
          <Button asChild variant="link" className="text-primary">
            <a href="#editor">Visit Full Generator →</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
