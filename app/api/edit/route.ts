const OPENROUTER_CHAT_COMPLETIONS_URL = "https://openrouter.ai/api/v1/chat/completions"

const MAX_IMAGE_BYTES = 10 * 1024 * 1024

function jsonError(message: string, status = 400) {
  return Response.json(
    {
      error: {
        message,
      },
    },
    { status },
  )
}

function getOpenRouterHeaders(request: Request, apiKey: string) {
  const headers: Record<string, string> = {
    Authorization: `Bearer ${apiKey}`,
    "Content-Type": "application/json",
  }

  const refererFromEnv = process.env.OPENROUTER_HTTP_REFERER
  const titleFromEnv = process.env.OPENROUTER_X_TITLE

  const origin = request.headers.get("origin") || request.headers.get("referer") || ""

  if (refererFromEnv) headers["HTTP-Referer"] = refererFromEnv
  else if (origin) headers["HTTP-Referer"] = origin

  if (titleFromEnv) headers["X-Title"] = titleFromEnv
  else headers["X-Title"] = "nano-banana-clone"

  return headers
}

export async function POST(request: Request) {
  const apiKey = process.env.OPENROUTER_API_KEY
  if (!apiKey) {
    return jsonError("Missing OPENROUTER_API_KEY on server. Add it to .env.local.", 501)
  }

  let form: FormData
  try {
    form = await request.formData()
  } catch {
    return jsonError("Invalid multipart form data.")
  }

  const prompt = form.get("prompt")
  const image = form.get("image")

  if (typeof prompt !== "string" || prompt.trim().length === 0) {
    return jsonError("Prompt is required.")
  }

  if (!(image instanceof File)) {
    return jsonError("Image file is required.")
  }

  if (!image.type.startsWith("image/")) {
    return jsonError("Image must be an image/* file.")
  }

  if (image.size > MAX_IMAGE_BYTES) {
    return jsonError("Image too large. Max is 10MB.")
  }

  const bytes = new Uint8Array(await image.arrayBuffer())
  const base64 = Buffer.from(bytes).toString("base64")
  const dataUrl = `data:${image.type};base64,${base64}`

  const upstreamBody = {
    model: "google/gemini-2.5-flash-image",
    modalities: ["image", "text"],
    messages: [
      {
        role: "user",
        content: [
          {
            type: "text",
            text: prompt.trim(),
          },
          {
            type: "image_url",
            image_url: {
              url: dataUrl,
            },
          },
        ],
      },
    ],
  }

  let upstreamRes: Response
  try {
    upstreamRes = await fetch(OPENROUTER_CHAT_COMPLETIONS_URL, {
      method: "POST",
      headers: getOpenRouterHeaders(request, apiKey),
      body: JSON.stringify(upstreamBody),
    })
  } catch {
    return jsonError("Failed to reach OpenRouter.", 502)
  }

  const upstreamJson = await upstreamRes.json().catch(() => null)

  if (!upstreamRes.ok) {
    const upstreamMessage =
      upstreamJson?.error?.message ||
      upstreamJson?.message ||
      `Upstream request failed with status ${upstreamRes.status}`
    return jsonError(upstreamMessage, upstreamRes.status)
  }

  const images: unknown =
    upstreamJson?.choices?.[0]?.message?.images
      ?.map?.((img: any) => img?.image_url?.url)
      ?.filter?.(Boolean) ?? []

  if (!Array.isArray(images) || images.length === 0) {
    return jsonError("No image returned from provider.", 502)
  }

  return Response.json({
    images,
    provider: "openrouter",
    model: "google/gemini-2.5-flash-image",
  })
}
