const RealmApi = require("realmApi.js").default

async function main() {
  const realmApi = new RealmApi("./auth")
  const response = await realmApi.edit()
  console.log(response)
}

main().catch(error => {
  console.error(error)
  process.exitCode = 1
})