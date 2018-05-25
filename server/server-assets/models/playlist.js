var mongoose = require('mongoose')
var Schema = mongoose.Schema
var ObjectId = Schema.Types.ObjectId
var schemaName = 'Playlist'


var schema = new Schema({
   songs: [{type: String}],
   userId: {
    type: ObjectId,
    ref: 'User',
    required: true
  }
})

module.exports = mongoose.model(schemaName, schema)