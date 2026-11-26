import type { Client, RequestResponse } from "../typings";
import { kickResponse } from "../typings/kick";

export async function kick(client: Client, realmId: number, xuid: string): Promise <RequestResponse<kickResponse>> {
     return client.request<kickResponse>(`/invites/${encodeURIComponent(realmId)}/invite/update`,{method: "PUT", body: {
        invites: { [xuid]: "REMOVE" }
     }})
}