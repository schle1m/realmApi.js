import type { RealmFull } from "./Realm"
export interface RealmsResponse {
  status: number;
  servers?: RealmFull[]
}