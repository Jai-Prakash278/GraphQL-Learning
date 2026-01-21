const mongoose = require("mongoose");

const quoteSchema = mongoose.Schema({
    quote: {
        type: String,
        require: true
    },
    by: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
})

module.exports = mongoose.model("Quote", quoteSchema);