import type { Client, RequestResponse } from "../typings";
import type { AcceptInviteResponse } from "../typings/accepndrejecttInvite";

export async function acceptInvite(client: Client, inviteId: string): Promise <RequestResponse<AcceptInviteResponse>> {
    return client.request<AcceptInviteResponse>(`/invites/accept/${inviteId}`, {method: "PUT"})
}