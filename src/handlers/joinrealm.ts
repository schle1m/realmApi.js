import type { Client, joinResponse, RequestResponse } from "../typings/index";
export async function joinRealm(client: Client, code: string): Promise<RequestResponse<joinResponse>> {
    const cleaned = code?.replace(/https:\/\/realms.gg\//g, '')
    return await client.request<joinResponse>(`/invites/v1/link/accept/${encodeURIComponent(cleaned)}`, {method: "POST"})
}
