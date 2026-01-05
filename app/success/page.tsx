import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function SuccessPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="container mx-auto px-4 py-20">
        <div className="mx-auto max-w-xl text-center space-y-5">
          <h1 className="text-4xl font-bold tracking-tight">Payment successful</h1>
          <p className="text-muted-foreground leading-relaxed">
            Thanks! If this was a subscription, access is granted after the payment confirmation is received.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Link href="/#editor">Start editing</Link>
            </Button>
            <Button asChild variant="outline" className="bg-transparent">
              <Link href="/pricing">Back to pricing</Link>
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}

