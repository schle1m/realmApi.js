import { baseRealm, RealmFull } from "./Realm";

export interface getInfoResponse {
    status: number;
    json: baseRealm | RealmFull | {errorCode: number, errorMsg: string}
}