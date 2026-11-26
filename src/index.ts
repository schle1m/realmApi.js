import * as handlers from "./handlers/index.js"
import { init } from "./util/init"
import type { Client, Handler, Methods, ApiOptions } from "./typings/index.js"

export * from "./typings/index.js"
export {error} from "./util/error"

class RealmApi {
  client: Client
  constructor(path: string, options: ApiOptions = {}) {
    this.client = init(path, options).client
  }
}
interface RealmApi extends Methods {};

for (const [name, fn] of Object.entries(handlers) as [string, Handler][]) {
  Object.defineProperty(RealmApi.prototype, name, {
    value(this: RealmApi, ...args: unknown[]) {
      return fn(this.client,  ...args);
    }
  })
}
export default RealmApi