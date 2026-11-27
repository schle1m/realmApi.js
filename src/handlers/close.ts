import { Client, openandcloseResponse, RequestResponse } from "../typings";

export async function close(client: Client, realmId: number): Promise<RequestResponse<openandcloseResponse>> {
    return client.request<openandcloseResponse>(`/worlds/${realmId}/close`, {method: "PUT"})
}