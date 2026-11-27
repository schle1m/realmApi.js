import { Client, RequestResponse } from "../typings";
import { editPermissionResponse } from "../typings/editPermissions";

export async function editDefaultPermissions(client: Client, realmId: number, permission: string): Promise <RequestResponse<editPermissionResponse>>{
    return client.request<editPermissionResponse>(`/worlds/${realmId}/defaultPermission`, {method: "PUT", body: {
        permission: `${permission.toUpperCase()}`
    }})
}