const RealmApi = require("realmApi.js").default

async function main() {
  const realmApi = new RealmApi("./auth");
  let res = await realmApi.joinRealm("BnuWx6R2pRpf7zA")
  console.log(res)
}
main()