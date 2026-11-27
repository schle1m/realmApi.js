export interface openandcloseResponse {
    status: number
    json: boolean | {errorCode: number, errorMsg: string}
}