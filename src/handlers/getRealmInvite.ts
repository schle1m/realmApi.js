import { Client, RequestResponse } from "../typings";
import { getRealmInviteResponse } from "../typings/getRealmInvite";

export async function getRealmInvite(client: Client, realmId: number): Promise<RequestResponse<getRealmInviteResponse>> {
    return client.request<getRealmInviteResponse>(`/links/v1?worldId=${realmId}`)
}