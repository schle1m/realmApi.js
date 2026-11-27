const RealmApi = require("realmApi.js").default

async function main() {
  const realmApi = new RealmApi("./auth");
  const res = await realmApi.ban(36017594, "2535471142409669")
  console.log(res)
}
main()