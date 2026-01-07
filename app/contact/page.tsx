import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Contact | CodeZS",
  description: "Contact CodeZS support.",
}

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="container mx-auto px-4 py-16">
        <div className="mx-auto max-w-3xl space-y-8">
          <header className="space-y-2">
            <h1 className="text-4xl font-bold tracking-tight">Contact</h1>
            <p className="text-muted-foreground">Need help with billing or the editor? Email us.</p>
          </header>

          <section className="space-y-2">
            <h2 className="text-xl font-semibold">Support Email</h2>
            <p className="text-sm text-muted-foreground">
              <a className="text-foreground underline underline-offset-4" href="mailto:support@codezs.online">
                support@codezs.online
              </a>
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-semibold">Legal</h2>
            <p className="text-sm text-muted-foreground">
              Please review our{" "}
              <Link className="text-foreground underline underline-offset-4" href="/privacy">
                Privacy Policy
              </Link>{" "}
              and{" "}
              <Link className="text-foreground underline underline-offset-4" href="/terms">
                Terms of Service
              </Link>
              .
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </main>
  )
}

