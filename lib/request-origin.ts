import type { NextRequest } from "next/server"

export function getRequestOrigin(request: NextRequest) {
  const forwardedProto = request.headers.get("x-forwarded-proto")
  const forwardedHost = request.headers.get("x-forwarded-host")
  const host = request.headers.get("host")

  const proto = forwardedProto || "http"
  const resolvedHost = forwardedHost || host

  if (resolvedHost) return `${proto}://${resolvedHost}`

  return new URL(request.url).origin
}

