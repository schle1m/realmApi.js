import type { RequestOpts } from "./request"
export interface RequestResponse<T> {
  status: number
  json: T | undefined
}

export interface DeviceCode {
  user_code: string
  device_code: string
  verification_uri: string
  expires_in: number
  interval: number
  message: string
}
export interface ApiOptions {
  username?: string
  flow?: "live" | "msal" | "sisu"
  version?: string
  onCode?: (code: DeviceCode) => void
}
export interface Client {
  request<T>(path: string, options?: RequestOpts): Promise<RequestResponse<T>>
  requestFrontendLegacy<T>(path: string, options?: RequestOpts): Promise<RequestResponse<T>>
}
export type Handler = (client: Client, ...args: any[]) => Promise<unknown>

type Handlers = typeof import("../handlers/index.js")
export type Methods = {
  [K in keyof Handlers]: Handlers[K] extends (client: Client, ...args: infer A) => infer R
    ? (...args: A) => R
    : never
}