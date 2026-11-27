import { Client, RequestResponse } from "../typings";
import type { openandcloseResponse } from "../typings/openandclose";

export async function open(client: Client, realmId: number): Promise<RequestResponse<openandcloseResponse>> {
    return client.request<openandcloseResponse>(`/worlds/${realmId}/open`, {method: "PUT"})
}