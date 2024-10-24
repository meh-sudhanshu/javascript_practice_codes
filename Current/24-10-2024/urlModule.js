

const http = require("http")
const url = require("url")


const server = http.createServer((req,res)=>{
    console.log(req.url)
    const urlObject = url.parse(req.url,true)
    console.log(urlObject)
})

server.listen(8080)