import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Privacy Policy | CodeZS",
  description: "Privacy Policy for CodeZS.",
}

export default function PrivacyPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="container mx-auto px-4 py-16">
        <div className="mx-auto max-w-3xl space-y-8">
          <header className="space-y-2">
            <h1 className="text-4xl font-bold tracking-tight">Privacy Policy</h1>
            <p className="text-sm text-muted-foreground">Last updated: January 7, 2026</p>
          </header>

          <section className="space-y-3 text-sm leading-relaxed text-muted-foreground">
            <p>
              This Privacy Policy explains how CodeZS (we/us) collects, uses, and shares information when you use our
              website and services (the Service) at codezs.online.
            </p>
            <p>
              If you have questions, contact us at{" "}
              <a className="text-foreground underline underline-offset-4" href="mailto:support@codezs.online">
                support@codezs.online
              </a>
              .
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold">Information We Collect</h2>
            <ul className="list-disc pl-5 text-sm leading-relaxed text-muted-foreground space-y-2">
              <li>
                Account information (such as email) if you sign in or purchase credits.
              </li>
              <li>
                Content you provide to the Service (e.g., images you upload and text prompts you submit).
              </li>
              <li>
                Usage data (e.g., pages viewed, approximate location, device/browser information, and diagnostic logs).
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold">How We Use Information</h2>
            <ul className="list-disc pl-5 text-sm leading-relaxed text-muted-foreground space-y-2">
              <li>Provide, operate, and improve the Service (including generating edits you request).</li>
              <li>Process payments, prevent fraud, and enforce our Terms.</li>
              <li>Communicate with you about your account, transactions, and support requests.</li>
              <li>Comply with legal obligations.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold">Sharing</h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              We may share information with service providers that help us run the Service (e.g., hosting, analytics,
              payment processing, and AI inference providers), and when required by law or to protect our rights.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold">Data Retention</h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              We retain information for as long as necessary to provide the Service and for legitimate business purposes
              (such as security, dispute resolution, and compliance). Where available, you may delete content or request
              deletion by contacting support.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold">Your Choices</h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              You can opt out of non-essential communications and request access, correction, or deletion of your
              information by emailing support.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold">Changes</h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              We may update this Privacy Policy from time to time. The Last updated date indicates when changes take
              effect.
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </main>
  )
}
