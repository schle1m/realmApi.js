const RealmApi = require("realmApi.js").default

async function main() {
  const realmApi = new RealmApi("./auth");
  const res = await realmApi.getRealmInvite(25168337)
  console.log(res)
}
main()