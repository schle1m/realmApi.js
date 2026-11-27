import { Client, RequestResponse } from "../typings";
import { editPermissionResponse } from "../typings/editPermissions";

export async function editPermissions(client: Client, realmId: number, xuid: string, permission: string): Promise <RequestResponse<editPermissionResponse>>{
    return client.request<editPermissionResponse>(`/worlds/${realmId}/userPermission`, {method: "PUT", body: {
        permission: `${permission.toUpperCase()}`, xuid
    }})
}