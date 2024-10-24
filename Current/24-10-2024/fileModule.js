

const fs = require("fs")

// fs.readFile("test.txt",(err,data)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log(data)
//     }
// })


// try{
//     const data = fs.readFileSync("./test.txt",'utf-8')
//     console.log(data.toString())
// }catch(err){
//     console.log(err)
// }


const content = "\nThis is a new new new new Content !!"
// fs.writeFile("new_file.txt",content,(err)=>{
//     console.log(err)
// })

// try{
//     fs.writeFileSync("new_file_2.txt",content,'utf-8')

// }catch(err){
//     console.log(err)
// }


// fs.appendFile("test.txt",content,(err)=>{
//     console.log(err)
// })

// try{
//     fs.appendFileSync("test.txt","\n hi guys !!","utf-8")

// }catch(err){
//     console.log(err)
// }


// fs.unlinkSync("teset.txt",(err)=>{
//     console.log(err)
// })


console.log("The file is parse successfully !!!")