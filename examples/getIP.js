const RealmApi = require("realmApi.js").default

async function main() {
  const realmApi = new RealmApi("./auth")
  const retry = !process.argv.includes("--no-retry")
  const response = await realmApi.getIp(36017594, retry)

  if (response.status === 200) {
    console.log(response.json)
  } else {
    console.log(`Realm join request returned status ${response.status}`)
  }
}

main().catch(error => {
  console.error(error)
  process.exitCode = 1
})