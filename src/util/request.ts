import type { Authflow } from "prismarine-auth"
import { getHeaders } from "./auth.js"
import type { Client } from "../typings/api"
import { error } from "./error"
import type { RequestOpts } from "../typings/request"

const baseUrl = "https://pocket.realms.minecraft.net"
const frontendLegacyBaseUrl = "https://bedrock.frontendlegacy.realms.minecraft-services.net"

export function createRequest(auth: Authflow, version: string): Client {
  async function send<T>(url: string, options: RequestOpts = {}) {
    const headers = await getHeaders(auth, version)
    const hasBody = options.body !== undefined
    const res = await fetch(url, {
      method: options.method ?? "GET",
      headers: hasBody ? { ...headers, "Content-Type": "application/json" }: headers,
      body: hasBody ? JSON.stringify(options.body) : undefined
    })
    const body = await res.text()
    let json: T | undefined = undefined
    try {
      json = JSON.parse(body)
    } catch {
      if (!res.ok) throw new error(body, res.status)
    }
    return { status: res.status, json }
  }
  return {
    request<T>(path: string, options: RequestOpts = {}) { return send<T>(baseUrl + path, options)},
    requestFrontendLegacy<T>(path: string, options: RequestOpts = {}) {return send<T>(frontendLegacyBaseUrl + path, options) },
  }
}