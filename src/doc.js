import fs from "fs"
var doc = fs.readFileSync(__dirname + "../readme.md", "utf-8")

module.exports = doc