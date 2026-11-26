import type { Authflow } from "prismarine-auth"
import { getHeaders } from "./auth.js"
import type { Client } from "../typings/api"
import { error } from "./error"
import type { RequestOpts } from "../typings/request"

const baseUrl = "https://pocket.realms.minecraft.net"

export function createRequest(auth: Authflow, version: string): Client {
  return {
    async request<T>(path: string, options: RequestOpts = {}) {
      const headers = await getHeaders(auth, version)
      const hasBody = options.body !== undefined
      const res = await fetch(baseUrl + path, {
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
  }
}