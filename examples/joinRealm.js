const RealmApi = require("realmApi.js").default

async function main() {
  const realmApi = new RealmApi("./auth");
  let res = await realmApi.joinRealm("gvdQugsgstrHdfY")
  console.log(res)
}
main()