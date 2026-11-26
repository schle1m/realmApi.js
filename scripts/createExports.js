const fs = require("fs")
const path = require("path")
const srcDir = path.resolve(__dirname, "..", "src");

for (const folder of ["handlers", "typings"]) {
  const dir = path.join(srcDir, folder);
  const exports = fs.readdirSync(dir)
    .filter((file) => file.endsWith(".ts") && file !== "index.ts").sort()
    .map((file) => `export * from "./${path.basename(file, ".ts")}";`)
  fs.writeFileSync(path.join(dir, "index.ts"), `${exports.join("\n")}\n`);
}
console.log("Created Exports!")