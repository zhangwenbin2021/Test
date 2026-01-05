import { Webhook } from "@creem_io/nextjs"

const webhookSecret = process.env.CREEM_WEBHOOK_SECRET

export const POST = webhookSecret
  ? Webhook({
      webhookSecret,
      onCheckoutCompleted: async ({ customer, product, webhookId }) => {
        console.log("[creem] checkout.completed", webhookId, customer?.email, product?.id)
      },
      onGrantAccess: async ({ reason, customer, metadata }) => {
        console.log("[creem] grant_access", reason, customer?.email, metadata?.referenceId)
      },
      onRevokeAccess: async ({ reason, customer, metadata }) => {
        console.log("[creem] revoke_access", reason, customer?.email, metadata?.referenceId)
      },
    })
  : async () =>
      Response.json(
        { error: "Missing CREEM_WEBHOOK_SECRET on server. Add it to .env.local." },
        { status: 501 },
      )
