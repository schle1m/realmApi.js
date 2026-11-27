export interface json {
    errorCode: number;
    errorMessage: string
}
export interface AcceptInviteResponse {
    status: number;
    json?: json
}
export interface RejectInviteResponse extends AcceptInviteResponse {
    
}