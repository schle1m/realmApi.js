const RealmApi = require("realmApi.js").default

async function main() {
  const realmApi = new RealmApi("./auth");
  const res = await realmApi.getInfoByCode("Eo4WWqgYd3c")
  console.log(res)
}
main()