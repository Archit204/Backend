let mongoose = require('mongoose')

let userSchma = new mongoose.Schema({
    name : String,
    surname : String
})

module.exports = mongoose.model ('users' , userSchma)