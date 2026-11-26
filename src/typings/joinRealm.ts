import type { LimitedRealm, Realm } from "./Realm";


export interface joinResponse {
    status: number;
    realm?: LimitedRealm;
}