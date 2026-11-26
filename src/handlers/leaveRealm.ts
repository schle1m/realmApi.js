import type { Client } from "../typings";
import { leaveResponse } from "../typings/leaveRealm";

export async function leaveRealm(client: Client, realmId: number): Promise <leaveResponse> {
    return client.request<leaveResponse>(`/invites/${encodeURIComponent(realmId)}`, {method: "DELETE"})
}