const RealmApi = require("realmApi.js").default

async function main() {
  const realmApi = new RealmApi("./auth");
  const res = await realmApi.getInvites()
  console.log(res.json.invites[0])
}
main()