import type { Realm } from "./Realm";

export interface opandDeopResponse {
    status: number
    json: Realm | {errorCode: number, errorMessage: string}
}