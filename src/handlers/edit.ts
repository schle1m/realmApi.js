import type { Client } from "../typings";
import type { RequestResponse } from "../typings";
import type { editRealmRequest, editRealmResponse } from "../typings/edit";

export async function edit( client: Client, realmId: number, name?: string, description?: string ): Promise<RequestResponse<editRealmResponse>> {
    const body: editRealmRequest = {}
    if (name !== undefined) body.name = name
    if (description !== undefined) body.description = description
    if (Object.keys(body).length === 0) {
        throw new TypeError("Provide a name or description to edit!")
    }
    return client.request<editRealmResponse>(`/worlds/${realmId}`, { method: "POST", body})
}