const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    firstName: {
        type: String,
        require: true
    },
    lastName: String,
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    }
})

module.exports = mongoose.model("User", userSchema);