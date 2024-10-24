const http = require("http")
const fs = require("fs")
const url = require("url")

const server = http.createServer((req,res)=>{
    const url = req.url
    res.writeHead(200,{'Content-Type':'text/html'})
    if(url === "/"){
        console.log("homepage")
        const fileContent = fs.readFileSync("./views/homepage.html")
        res.write(fileContent)
        res.end()
    }else if(url === "/services"){
        console.log("services")
        const fileContent = fs.readFileSync("./views/services.html")
        res.write(fileContent)
        res.end()
    }else if(url === "/about"){
        console.log("about")
        const fileContent = fs.readFileSync("./views/about.html")
        res.write(fileContent)
        res.end()
    }else{
        console.log("error page !!")
        const fileContent = fs.readFileSync("./views/error.html")
        res.write(fileContent)
        res.end()
    }

})



server.listen(8080,()=>{
    console.log("server started at port 8080 !!")
})