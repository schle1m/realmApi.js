const RealmApi = require("realmApi.js").default

async function main() {
  const realmApi = new RealmApi("./auth");
  const res = await realmApi.acceptInvite("185323631")
  console.log(res)
}
main()