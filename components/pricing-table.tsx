"use client"

import { Check, Sparkles } from "lucide-react"
import { useMemo, useState } from "react"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { cn } from "@/lib/utils"

type Billing = "monthly" | "annually" | "one-time"

type PlanKey = "lite" | "pro" | "enterprise"

type Plan = {
  key: PlanKey
  name: string
  description: string
  features: string[]
  highlight?: boolean
  priceLabel: string
  subLabel?: string
  productIdEnv: string
}

type ProductIds = Record<string, string | null | undefined>

function buildPlans(billing: Billing): Plan[] {
  if (billing === "monthly") {
    return [
      {
        key: "lite",
        name: "Lite",
        description: "For quick edits and personal projects.",
        priceLabel: "$9.9 / month",
        subLabel: "6,000 credits / month",
        productIdEnv: "NEXT_PUBLIC_CREEM_PRODUCT_ID_LITE_MONTHLY",
        features: ["Consistent character edits", "High-quality generations", "Commercial use"],
      },
      {
        key: "pro",
        name: "Pro",
        description: "For creators who need more volume.",
        priceLabel: "$21 / month",
        subLabel: "20,000 credits / month",
        productIdEnv: "NEXT_PUBLIC_CREEM_PRODUCT_ID_PRO_MONTHLY",
        highlight: true,
        features: ["Everything in Lite", "Faster processing", "Priority support"],
      },
      {
        key: "enterprise",
        name: "Enterprise",
        description: "For teams and high-throughput workloads.",
        priceLabel: "$56 / month",
        subLabel: "60,000 credits / month",
        productIdEnv: "NEXT_PUBLIC_CREEM_PRODUCT_ID_ENTERPRISE_MONTHLY",
        features: ["Everything in Pro", "Team billing", "Dedicated support"],
      },
    ]
  }

  if (billing === "annually") {
    return [
      {
        key: "lite",
        name: "Lite",
        description: "For quick edits and personal projects.",
        priceLabel: "$89 / year",
        subLabel: "72,000 credits / year (save ~30%)",
        productIdEnv: "NEXT_PUBLIC_CREEM_PRODUCT_ID_LITE_YEARLY",
        features: ["Consistent character edits", "High-quality generations", "Commercial use"],
      },
      {
        key: "pro",
        name: "Pro",
        description: "For creators who need more volume.",
        priceLabel: "$249 / year",
        subLabel: "240,000 credits / year (save ~30%)",
        productIdEnv: "NEXT_PUBLIC_CREEM_PRODUCT_ID_PRO_YEARLY",
        highlight: true,
        features: ["Everything in Lite", "Faster processing", "Priority support"],
      },
      {
        key: "enterprise",
        name: "Enterprise",
        description: "For teams and high-throughput workloads.",
        priceLabel: "$669 / year",
        subLabel: "720,000 credits / year (save ~30%)",
        productIdEnv: "NEXT_PUBLIC_CREEM_PRODUCT_ID_ENTERPRISE_YEARLY",
        features: ["Everything in Pro", "Team billing", "Dedicated support"],
      },
    ]
  }

  return [
    {
      key: "lite",
      name: "Lite Pack",
      description: "One-time credits for occasional use.",
      priceLabel: "$9 one-time",
      subLabel: "8,000 credits",
      productIdEnv: "NEXT_PUBLIC_CREEM_PRODUCT_ID_LITE_ONETIME",
      features: ["No subscription", "Use anytime", "Commercial use"],
    },
    {
      key: "pro",
      name: "Pro Pack",
      description: "Best value for bursts of work.",
      priceLabel: "$29 one-time",
      subLabel: "30,000 credits",
      productIdEnv: "NEXT_PUBLIC_CREEM_PRODUCT_ID_PRO_ONETIME",
      highlight: true,
      features: ["Everything in Lite Pack", "More credits per $", "Priority support"],
    },
    {
      key: "enterprise",
      name: "Enterprise Pack",
      description: "For large one-off campaigns.",
      priceLabel: "$79 one-time",
      subLabel: "90,000 credits",
      productIdEnv: "NEXT_PUBLIC_CREEM_PRODUCT_ID_ENTERPRISE_ONETIME",
      features: ["Everything in Pro Pack", "Bulk credits", "Dedicated support"],
    },
  ]
}

export function PricingTable({
  customerEmail,
  productIds,
}: {
  customerEmail: string | null
  productIds: ProductIds
}) {
  const [billing, setBilling] = useState<Billing>("monthly")

  const plans = useMemo(() => buildPlans(billing), [billing])

  return (
    <div className="space-y-10">
      <div className="flex justify-center">
        <Tabs value={billing} onValueChange={(v) => setBilling(v as Billing)}>
          <TabsList>
            <TabsTrigger value="monthly">Monthly</TabsTrigger>
            <TabsTrigger value="annually">
              Annually <span className="ml-2 hidden sm:inline text-muted-foreground">(save ~30%)</span>
            </TabsTrigger>
            <TabsTrigger value="one-time">One-time</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {plans.map((plan) => {
          const productId = productIds[plan.productIdEnv] ?? null
          const disabled = !productId

          return (
            <Card
              key={`${billing}:${plan.key}`}
              className={cn(
                "relative overflow-hidden",
                plan.highlight && "border-primary shadow-[0_0_0_1px_hsl(var(--primary))] shadow-primary/10",
              )}
            >
              {plan.highlight ? (
                <div className="absolute right-4 top-4">
                  <Badge className="gap-1">
                    <Sparkles className="h-3.5 w-3.5" />
                    Most popular
                  </Badge>
                </div>
              ) : null}

              <CardHeader className="space-y-2">
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
              </CardHeader>

              <CardContent className="space-y-6">
                <div className="space-y-1">
                  <div className="text-4xl font-bold tracking-tight">{plan.priceLabel}</div>
                  {plan.subLabel ? <div className="text-sm text-muted-foreground">{plan.subLabel}</div> : null}
                </div>

                <ul className="space-y-3 text-sm">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex gap-2">
                      <Check className="h-4 w-4 mt-0.5 text-primary" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                {disabled ? (
                  <div className="rounded-md border border-border bg-muted/30 p-3 text-xs text-muted-foreground">
                    Checkout disabled. Set <span className="font-mono">{plan.productIdEnv}</span> in{" "}
                    <span className="font-mono">.env.local</span>.
                  </div>
                ) : null}
              </CardContent>

              <CardFooter>
                {productId ? (
                  <Button
                    asChild
                    className={cn("w-full", plan.highlight && "bg-primary text-primary-foreground hover:bg-primary/90")}
                  >
                    <Link
                      href={(() => {
                        const params = new URLSearchParams()
                        params.append("productId", productId)
                        if (customerEmail) params.append("customer", JSON.stringify({ email: customerEmail }))
                        return `/checkout?${params.toString()}`
                      })()}
                    >
                      Get started
                    </Link>
                  </Button>
                ) : (
                  <Button className="w-full" disabled>
                    Get started
                  </Button>
                )}
              </CardFooter>
            </Card>
          )
        })}
      </div>

      <div className="mx-auto max-w-2xl rounded-lg border border-border bg-card p-6 text-center space-y-2">
        <div className="font-semibold">Need a custom plan?</div>
        <p className="text-sm text-muted-foreground">
          Contact us for bulk credits, team rollout, or an invoice-friendly setup.
        </p>
      </div>
    </div>
  )
}
