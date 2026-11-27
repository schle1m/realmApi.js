const RealmApi = require("realmApi.js").default

async function main() {
  const realmApi = new RealmApi("./auth");
  const res = await realmApi.editDefaultPermissions(36017594, "member")
  console.log(res)
}
main()