import { createAuth } from "./auth.js"
import { createRequest } from "./request.js"
import type { ApiOptions } from "../typings/index.js"

export function init(path: string, options: ApiOptions = {}) {
  const auth = createAuth(path, options)
  const client = createRequest(auth, options.version ?? "1.26.63")
  return { auth, client }
}