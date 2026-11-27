export type RealmWorldType =
  | "NORMAL"
  | "MINIGAME"
  | "ADVENTUREMAP"
  | "EXPERIENCE"
  | "INSPIRATION";

export interface RealmPlayer {
  uuid: string;
  name: string | null;
  operator: boolean;
  accepted: boolean;
  online: boolean;
  permission: string;
}

export interface RealmStoriesSettings {
  realmOptIn: string;
  playerOptIn: string;
  autostories: boolean;
  coordinates: boolean;
  timeline: boolean;
  notifications: boolean;
  inGameChatMessages: boolean;
  storageShard: number;
  optInRequired: boolean;
}
export interface RealmSlot {
  [key: string]: unknown;
}

export interface baseRealm {
  id: number;
  ownerUUID: string;
  name: string | null;
  motd: string | null;
  state: "OPEN" | "CLOSED" | "UNINITIALIZED";
  expired: boolean;
  tier: string;
  players: RealmPlayer[];
  maxPlayers: number;
  activeSlot: number;
  slots: RealmSlot[];
  member: boolean;
  clubId: number | null;
  isHardcore?: boolean | null;
  storiesSettings?: RealmStoriesSettings;
  friendlyId?: string | null;
}

export interface RealmFull {
  id: number;
  remoteSubscriptionId: string;
  owner: string | null;
  ownerUUID: string;
  name: string | null;
  motd: string | null;
  defaultPermission: string;
  state: "OPEN" | "CLOSED" | "UNINITIALIZED";
  daysLeft: number;
  expired: boolean;
  expiredTrial: boolean;
  gracePeriod: boolean;
  worldType: RealmWorldType;
  tier: string;
  players: RealmPlayer[] | null;
  maxPlayers: number;
  thumbnailId: string | null;
  minigameName?: string | null;
  minigameId?: number | null;
  minigameImage?: string | null;
  activeSlot: number;
  slots: RealmSlot[] | null;
  member: boolean;
  clubId: number | null;
  subscriptionRefreshStatus: string | null;
  parentWorldId: number | null;
  parentWorldName: string | null;
  activeVersion: string | null;
  compatibility: string | null;
  isHardcore: boolean | null;
  gameMode: string | null;
  regionSelectionPreference: {
    regionSelectionPreference: number;
    preferredRegion: string;
  } | null;
  storiesSettings?: RealmStoriesSettings;
  friendlyId: string | null;
}
