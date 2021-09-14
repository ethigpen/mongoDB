const mongoose = require("mongoose");

const JokesSchema = new mongoose.Schema({
    setup: {
        type: String
    },
    punchline: {
        type: String
    }
})


const Joke = mongoose.model("Joke", JokesSchema)

module.exports = Joke;