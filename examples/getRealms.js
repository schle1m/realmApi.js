const RealmApi = require("realmApi.js").default

async function main() {
  const realmApi = new RealmApi("./auth");
  const res = await realmApi.getRealms()
  if (res.status === 200) {
    for (const realm of res.json.servers) {
      console.log(realm.id, realm.name, realm.state)
    }
  } else {
    console.log(res.status)
  }
}
main()