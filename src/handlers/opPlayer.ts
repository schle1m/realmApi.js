import { Client, RequestResponse } from "../typings";
import { opandDeopResponse } from "../typings/opanddeop";

export async function opPlayer(client: Client, realmId: number,xuid: string): Promise <RequestResponse<opandDeopResponse>> {
    return client.request<opandDeopResponse>(`/invites/${realmId}/invite/update`, {method: "PUT", body: {
        invites: {
            [xuid] : "OP"
        }
    }})
} 