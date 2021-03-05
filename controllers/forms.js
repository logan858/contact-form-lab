module.exports = {
    formFunc,
    updateFunc
}

let Form = require("../models/form");

function formFunc(req, res) {
    res.render("index.ejs")
}

function updateFunc(req, res) {
    Form.updateDataFunc(req.body)
    // if(req.body.fullname) {
        res.render("submit.ejs", {formS: Form.getAll()})
    //}
}
