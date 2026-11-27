import { Client } from "../typings";

export async function ban(client: Client, realmId: number, xuid: string) {
    return client.request(`/worlds/${realmId}/blocklist/${xuid}`, {method: "POST"});
}