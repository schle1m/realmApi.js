const RealmApi = require("realmApi.js").default

async function main() {
  const realmApi = new RealmApi("./auth");
  let res = await realmApi.open(25168337)
  console.log(res)
}
main()