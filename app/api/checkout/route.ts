import { Checkout } from "@creem_io/nextjs"

function jsonError(message: string, status = 400) {
  return Response.json(
    {
      error: { message },
    },
    { status },
  )
}

const apiKey = process.env.CREEM_API_KEY

function getTestMode() {
  const value = process.env.CREEM_TEST_MODE
  if (value === "1" || value === "true") return true
  if (value === "0" || value === "false") return false

  const apiKey = process.env.CREEM_API_KEY
  if (!apiKey) return false
  return apiKey.toLowerCase().includes("test")
}

export const GET = apiKey
  ? Checkout({
      apiKey,
      testMode: getTestMode(),
      defaultSuccessUrl: "/success",
    })
  : async () => jsonError("Missing CREEM_API_KEY on server. Add it to .env.local.", 501)
