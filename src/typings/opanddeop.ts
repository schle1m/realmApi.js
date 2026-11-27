export interface opandDeopResponse {
    status: number
    json: boolean | {errorCode: number, errorMessage: string}
}