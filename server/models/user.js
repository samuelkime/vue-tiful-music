var mongoose = require('mongoose')
var Schema = mongoose.Schema
var schemaName = 'User'


var schema = new Schema({
    email: {type: String, required: true, unique: true},
    displayName: {type: String, required: true},
})

module.exports = mongoose.model(schemaName, schema)