export interface inviteLink {
    linkId: string;
    profileUuid: string
    type: string;
    ts: number
    url: string;
    deepLinkUrl: string;
    enabled: true
    expirationDate: string | null
}
export interface getRealmInviteResponse {
    status: number;
    json: inviteLink[] | {errorCode: number, errorMsg: string}
}