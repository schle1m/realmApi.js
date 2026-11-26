import type { Realm } from "./Realm"
export interface RealmsResponse {
  status: number;
  servers?: Realm[]
}