

const http = require("http")
const findAvg = require("./findAvg")

const server = http.createServer((req,res)=>{
    res.writeHead(200,{"Content-Type":"text/html"})
    res.write("<h2>Hi This is your response</h2>")
    const avg = findAvg(10,20,30)
    res.write(`<h2>The avg is ${avg} </h2>`)
    res.end()
})


server.listen(8080)