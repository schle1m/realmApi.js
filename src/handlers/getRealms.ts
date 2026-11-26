import type { Client, RealmsResponse, RequestResponse } from "../typings/index.js"

export async function getRealms(client: Client): Promise<RequestResponse<RealmsResponse>> {
  return await client.request<RealmsResponse>("/worlds")
}