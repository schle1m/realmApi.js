import type { Client, joinResponse, RequestResponse } from "../typings/index";

export async function getInfoByCode(client: Client, code: string): Promise<RequestResponse<joinResponse>> {
    const cleaned = code?.replace(/https:\/\/realms.gg\//g, "")
    return await client.request<joinResponse>(`/worlds/v1/link/${encodeURIComponent(cleaned)}`, {method: "GET"})
}
