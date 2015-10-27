import restify from "restify"
import fs from "fs"
import path from "path"

const server = restify.createServer({
  name: "library-runner",
  version: require("../../package.json").version,
})

server.pre(restify.CORS({
  origins: ["http://127.0.0.1:8080"],
}))

server.opts(/\.*/, (req, res, next) => {
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Headers", "Authorization, Content-Type")
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE")
    res.send(200)
  } else {
    next()
  }
})

server.post("/crypto", (req, res) => {

})

server.get("/doc", (req, res) => {
  console.log(path.resolve("../../readme.md"))

  try {
    fs.readFile(path.resolve(__dirname + "../../readme.md"), "utf-8", (err, buffer) => {
      console.log(buffer)
    })
  } catch (e) {
    console.log(e)
  }
})

server.listen(3001, function() {})