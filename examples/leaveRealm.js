const RealmApi = require("realmApi.js").default

async function main() {
  const realmApi = new RealmApi("./auth");
  let res = await realmApi.leaveRealm(36017594)
  console.log(res)
}
main()