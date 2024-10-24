


const mailer = require("nodemailer")

const transport = mailer.createTransport({
    service:"gmail",
    auth:{
        user:"sudhanshukumar8816@gmail.com",
        pass:"Gmail#&*@123"
    }
})

let messageOject = {
    from:"sudhanshukumar8816@gmail.com",
    to:"sudhu8816@gmail.com",
    subject:"This mail is from node js",
    text:"Hi, i am coming from node js"
}

transport.sendMail(messageOject,(err,info)=>{
    if(err){
        console.log(err)
    }else{
        console.log("email sent !!")
        console.log(info)
    }
})