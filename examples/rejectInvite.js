const RealmApi = require("realmApi.js").default

async function main() {
  const realmApi = new RealmApi("./auth");
  const res = await realmApi.rejectInvite("185354161")
  console.log(res)
}
main()