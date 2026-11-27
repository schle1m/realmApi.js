/*
    UTIL Script for switching between Realm Admin and Normal Player in Dev to get Missing Permissions and try stuff out
*/
const fs = require("fs");
const path = require("path")
async function run() {
    const root = path.resolve(__dirname, "..");

    const auth = path.join(root, "auth");
    const authA = path.join(root, "authA");
    const authM = path.join(root, "authM");
    const temp = path.join(root, "__auth_temp")
    if (fs.existsSync(authA)) {
        fs.renameSync(auth, temp);
        fs.renameSync(authA, auth);
        fs.renameSync(temp, authM);
        console.log("Rotated: auth");
    } else if (fs.existsSync(authM)) {
        fs.renameSync(auth, temp);
        fs.renameSync(authM, auth);
        fs.renameSync(temp, authA);
        console.log("Rotated: auth");
    } else {
        console.log("ERROR: Could not find authA or authM.")
    }
}
run()