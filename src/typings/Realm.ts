export type RealmWorldType =
  | "NORMAL"
  | "MINIGAME"
  | "ADVENTUREMAP"
  | "EXPERIENCE"
  | "INSPIRATION"

export interface RealmPlayer {
  uuid: string
  name: string | null
  operator: boolean
  accepted: boolean
  online: boolean
  permission: string
}
export interface LimitedRealm {
  id: number
  remoteSubscriptionId: string
  owner: string | null
  ownerUUID: string;
  name: string | null;
  motd: string | null
  defaultPermission: string
  state: "OPEN" | "CLOSED" | "UNINITIALIZED";
  daysLeft: number;
  expired: boolean
  expiredTrial: boolean
  gracePeriod: boolean
  worldType: RealmWorldType;
  players: RealmPlayer[] | null
  maxPlayers: number
  minigameName?: string | null
  minigameId?: number | null
  minigameImage?: string | null;
  activeSlot: number
  member: boolean
  clubId: number | null
}
export interface Realm extends LimitedRealm {
  tier: string;
  thumbnailId: string | null;
  slots: unknown[] | null;
  subscriptionRefreshStatus: string | null;
  parentWorldId: number | null;
  parentWorldName: string | null;
  activeVersion: string | null;
  compatibility: string | null;
  isHardcore: boolean | null;
  gameMode: string | null;
  regionSelectionPreference: string | null;
  friendlyId: string | null;
}