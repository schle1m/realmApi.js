import type { Client, RequestResponse } from "../typings";
import { getInvitesResponse } from "../typings/getInvite";
export async function getInvites(client: Client): Promise <RequestResponse<getInvitesResponse>> {
    return client.request<getInvitesResponse>("/invites/pending")
}