import { Authflow, Titles } from "prismarine-auth"
import type {ApiOptions } from "../typings/api"

const realmsHost = "https://pocket.realms.minecraft.net/"

export function createAuth(path: string, options: ApiOptions = {}) {
  return new Authflow( options.username ?? "realmapi", path, {
      flow: options.flow ?? "live",
      authTitle: Titles.MinecraftNintendoSwitch,
      deviceType: "Nintendo"
    }, options.onCode
  )
}
export async function getHeaders(auth: Authflow, version: string) {
  const token = await auth.getXboxToken(realmsHost)
  return {
    Authorization: `XBL3.0 x=${token.userHash};${token.XSTSToken}`,
    "Client-Version": version,
    "x-clientversion": version,
    "x-clientplatform": "Windows",
    "User-Agent": "MCPE/UWP",
    "Cache-Control": "no-cache",
    Charset: "utf-8"
  }
}