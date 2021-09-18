const { Schema, model } = require('mongoose')

const schema = new Schema({
    image: { type: String, required: true },
    name: { type: String, required: true },
    href: { type: String, required: true },
    anchorr: { type: String, default: null },
    description: { type: String, default: null }
})

module.exports = model('Company', schema)