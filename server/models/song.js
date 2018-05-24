var mongoose = require('mongoose')
var Schema = mongoose.Schema
var schemaName = 'Song'


var schema = new Schema({
    title: {type: String, required: true},
    albumArt: {type: String, required: true},
    artist: {type: String, required: true},
    collection: {type: String, required: true},
    price: {type: String, required: true},
    preview: {type: String, required: true},
 })

module.exports = mongoose.model(schemaName, schema)