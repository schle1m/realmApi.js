import { Client, inviteCountResponse, RequestResponse } from "../typings";

export async function getInviteCount(client: Client): Promise <RequestResponse<inviteCountResponse>> {
    return client.request<inviteCountResponse>("/invites/count/pending")
}