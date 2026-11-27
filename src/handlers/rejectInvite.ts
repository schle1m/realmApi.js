import type { Client, RequestResponse } from "../typings";
import type { RejectInviteResponse } from "../typings/accepndrejecttInvite";

export async function rejectInvite(client: Client, inviteId: string): Promise <RequestResponse<RejectInviteResponse>> {
    return client.request<RejectInviteResponse>(`/invites/reject/${inviteId}`, {method: "PUT"})
}