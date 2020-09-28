

const mongoose = require('mongoose')
const schema = mongoose.Schema

const PlayerSchema = new schema({
    name: { type: String },
    position: { type: String },
})

module.exports = mongoose.model('Player', PlayerSchema)
