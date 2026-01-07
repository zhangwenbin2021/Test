import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "About | CodeZS",
  description: "About CodeZS and our AI image editing service.",
}

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="container mx-auto px-4 py-16">
        <div className="mx-auto max-w-3xl space-y-8">
          <header className="space-y-2">
            <h1 className="text-4xl font-bold tracking-tight">About</h1>
            <p className="text-muted-foreground">
              CodeZS provides a web-based AI image editor that lets you upload an image and request edits using text.
            </p>
          </header>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold">Product Readiness</h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              We maintain clear site navigation, reachable customer support, and transparent policies for privacy,
              billing, and acceptable use.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold">Technology Disclosure</h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              The Service is an independent interface that uses third-party AI image models and infrastructure to
              process your requests. We are not affiliated with the creators of any third-party models we may use.
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </main>
  )
}

