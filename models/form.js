module.exports = {
    getAll,
    updateDataFunc
}

let forms = [
    
]

function getAll() {
    return forms;
}

function updateDataFunc(body) {
    let newObj = {
        fullname: body.fullName,
        email: body.email,
        message: body.message
    }
    forms = [newObj]
}