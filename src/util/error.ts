export class error extends Error {
  status?: number
  body: string
  constructor(body: string, status?: number) {
    super(`Request failed with status ${status}`)
    this.name = "RealmApiError";
    this.status = status
    this.body = body;
  }
}