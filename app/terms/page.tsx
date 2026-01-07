import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Terms of Service | CodeZS",
  description: "Terms of Service for CodeZS.",
}

export default function TermsPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="container mx-auto px-4 py-16">
        <div className="mx-auto max-w-3xl space-y-8">
          <header className="space-y-2">
            <h1 className="text-4xl font-bold tracking-tight">Terms of Service</h1>
            <p className="text-sm text-muted-foreground">Last updated: January 7, 2026</p>
          </header>

          <section className="space-y-3 text-sm leading-relaxed text-muted-foreground">
            <p>
              These Terms of Service (Terms) govern your access to and use of CodeZS (the Service) at codezs.online. By
              using the Service, you agree to these Terms.
            </p>
            <p>
              For questions, contact{" "}
              <a className="text-foreground underline underline-offset-4" href="mailto:support@codezs.online">
                support@codezs.online
              </a>
              .
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold">Use of the Service</h2>
            <ul className="list-disc pl-5 text-sm leading-relaxed text-muted-foreground space-y-2">
              <li>You must comply with applicable laws and these Terms.</li>
              <li>You are responsible for your account activity and keeping your login credentials secure.</li>
              <li>
                You must not misuse the Service (including attempting to interfere with or disrupt security, rate limits,
                or infrastructure).
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold">Content</h2>
            <ul className="list-disc pl-5 text-sm leading-relaxed text-muted-foreground space-y-2">
              <li>
                You retain rights to content you upload (Input). You grant us a limited license to process Input to
                provide the Service (e.g., generate edits).
              </li>
              <li>
                You are responsible for ensuring you have the rights to upload and use your Input, and that it does not
                violate laws or third-party rights.
              </li>
              <li>
                Generated outputs may be similar for different users. We do not guarantee uniqueness.
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold">Payments and Credits</h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              If the Service offers paid plans or credits, purchases are processed by our payment partners. Prices may
              change. You can cancel subscriptions in accordance with the billing terms presented at checkout.
              Refunds, if any, are handled according to applicable law and the policies of our payment partners. For
              billing help, contact support.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold">Disclaimer</h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              The Service is provided as is and as available. We disclaim warranties to the fullest extent permitted
              by law.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold">Limitation of Liability</h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              To the fullest extent permitted by law, we are not liable for indirect, incidental, special,
              consequential, or punitive damages, or any loss of data, profits, or revenues.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold">Termination</h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              We may suspend or terminate access to the Service if you violate these Terms or if we must do so to comply
              with law or protect the Service.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold">Changes</h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              We may update these Terms from time to time. Continued use of the Service after changes become effective
              means you accept the updated Terms.
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </main>
  )
}
