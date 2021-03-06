module.exports = {
    formFunc,
    updateFunc
}

let Form = require("../models/form");
let nodeMail = require("nodemailer")

function formFunc(req, res) {
    res.render("index.ejs")
}

function updateFunc(req, res) {
    Form.updateDataFunc(req.body)
    //nodemailer below
    const transporter = nodeMail.createTransport({
        service: 'gmail',
        auth: {
            //update gmail to function.  (also remove gmail security options in gmail account)
            user: "testemail@gmail.com",
            pass: "testpw"
        }
    })  
    const mailOptions = {
        from: `${req.body.email}`,
        to: "testemail@gmail.com",
        subject: `${req.body.fullname}`,
        text: `${req.body.message}`,
        replyTo: `${req.body.email}`
    }
    transporter.sendMail(mailOptions)
    //end of nodemailer section
    res.render("submit.ejs", {formS: Form.getAll()})
}
