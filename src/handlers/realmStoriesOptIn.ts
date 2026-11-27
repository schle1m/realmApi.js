import type { Client } from "../typings";

export async function realmStoriesOptIn(client: Client, realmId: number): Promise<{ status: number }> {
    const response = await client.requestFrontendLegacy<never>(`/worlds/${realmId}/stories/settings`, {
            method: "POST", body: {
                playerOptIn: "OPT_IN", realmOptIn: "OPT_IN"
    }})
    return { status: response.status}
}