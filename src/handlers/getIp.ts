import type { Client } from "../typings";
import type { RequestResponse } from "../typings";
import type { GetIpResponse } from "../typings/getIp";
import { error } from "../util/error";
import { realmStoriesOptIn } from "./realmStoriesOptIn";

const retryDelayMs = 1800

export async function getIp(client: Client, realmId: number, retry = true): Promise<RequestResponse<GetIpResponse>> {
    let optInAttempted = false
    while (true) {
        let response: RequestResponse<GetIpResponse>
        try {
            response = await client.request<GetIpResponse>(`/worlds/${realmId}/join`);
        } catch (cause) {
            if (!retry || !(cause instanceof error)) throw cause
            if (cause.status === 503) {
                await new Promise(resolve => setTimeout(resolve, retryDelayMs))
                continue
            }
            if (cause.status !== 403 || optInAttempted) throw cause
            response = { status: 403, json: undefined }
        }
        if (retry && response.status === 503) {
            await new Promise(resolve => setTimeout(resolve, retryDelayMs))
            continue
        }
        if (retry && response.status === 403 && !optInAttempted) {
            optInAttempted = true
            const optInResponse = await realmStoriesOptIn(client, realmId)
            if (optInResponse.status !== 204) {
                return { status: optInResponse.status, json: undefined }
            }
            continue
        }
        return response
    }
}