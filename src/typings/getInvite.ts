export interface RealmInvite {
  invitationId: string;
  worldId: string;
  worldName: string;
  worldDescription: string;
  worldOwnerName: string;
  worldOwnerUuid: string;
  date: number;
  status: "ACTIVE" | "ACCEPTED" | "REJECTED" | "EXPIRED";
  inviterName: string;
  inviterUuid: string;
}
export interface getInvitesResponse {
  status: number;
  json?: {
    invites: RealmInvite[];
  };
}