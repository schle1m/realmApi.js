import { Client } from "../typings";

export async function unban(client: Client, realmId: number, xuid: string) {
    return client.request(`/worlds/${realmId}/blocklist/${xuid}`, {method: "DELETE"});
}