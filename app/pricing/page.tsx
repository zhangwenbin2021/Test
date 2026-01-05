import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PricingTable } from "@/components/pricing-table"
import { createClient } from "@/lib/supabase/server"

export default async function PricingPage() {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  const productIds = {
    NEXT_PUBLIC_CREEM_PRODUCT_ID_LITE_MONTHLY: process.env.NEXT_PUBLIC_CREEM_PRODUCT_ID_LITE_MONTHLY ?? null,
    NEXT_PUBLIC_CREEM_PRODUCT_ID_PRO_MONTHLY: process.env.NEXT_PUBLIC_CREEM_PRODUCT_ID_PRO_MONTHLY ?? null,
    NEXT_PUBLIC_CREEM_PRODUCT_ID_ENTERPRISE_MONTHLY: process.env.NEXT_PUBLIC_CREEM_PRODUCT_ID_ENTERPRISE_MONTHLY ?? null,
    NEXT_PUBLIC_CREEM_PRODUCT_ID_LITE_YEARLY: process.env.NEXT_PUBLIC_CREEM_PRODUCT_ID_LITE_YEARLY ?? null,
    NEXT_PUBLIC_CREEM_PRODUCT_ID_PRO_YEARLY: process.env.NEXT_PUBLIC_CREEM_PRODUCT_ID_PRO_YEARLY ?? null,
    NEXT_PUBLIC_CREEM_PRODUCT_ID_ENTERPRISE_YEARLY: process.env.NEXT_PUBLIC_CREEM_PRODUCT_ID_ENTERPRISE_YEARLY ?? null,
    NEXT_PUBLIC_CREEM_PRODUCT_ID_LITE_ONETIME: process.env.NEXT_PUBLIC_CREEM_PRODUCT_ID_LITE_ONETIME ?? null,
    NEXT_PUBLIC_CREEM_PRODUCT_ID_PRO_ONETIME: process.env.NEXT_PUBLIC_CREEM_PRODUCT_ID_PRO_ONETIME ?? null,
    NEXT_PUBLIC_CREEM_PRODUCT_ID_ENTERPRISE_ONETIME: process.env.NEXT_PUBLIC_CREEM_PRODUCT_ID_ENTERPRISE_ONETIME ?? null,
  }

  return (
    <main className="min-h-screen">
      <Header />
      <div className="container mx-auto px-4 py-16">
        <div className="mx-auto max-w-3xl text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-balance">Simple pricing for every workflow</h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Choose a plan that fits your needs. Upgrade, downgrade, or cancel anytime.
          </p>
        </div>

        <div className="mt-10">
          <PricingTable customerEmail={user?.email ?? null} productIds={productIds} />
        </div>
      </div>
      <Footer />
    </main>
  )
}
