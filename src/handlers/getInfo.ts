import { Client, RequestResponse } from "../typings";
import { getInfoResponse } from "../typings/getInfo";

export async function getInfo(client: Client, realmId: number): Promise <RequestResponse<getInfoResponse>>{
    return client.request<getInfoResponse>(`/worlds/${realmId}`)
}