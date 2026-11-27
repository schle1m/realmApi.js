import { Client } from "../typings";

export async function deopPlayer(client: Client, realmId: number, xuid: string,) {
    return client.request(`/invites/${realmId}/invite/update`, {method: "PUT", body: {
        invites: {
            [xuid] : "DEOP"
        }
    }})
} 