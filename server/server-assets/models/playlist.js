var mongoose = require('mongoose')
var Schema = mongoose.Schema
var ObjectId = Schema.Types.ObjectId
var schemaName = 'Playlist'

let songSchema = new Schema({
  title: {type: String, required: true},
  albumArt: {type: String, required: true},
  artist: {type: String, required: true},
  album: {type: String, required: true},
  price: {type: String, required: true},
  preview: {type: String, required: true},
})


var schema = new Schema({
   title: {type: String, required: true},
   songs: [songSchema],
   userId: {
    type: ObjectId,
    ref: 'User',
    required: true
  }
})

module.exports = mongoose.model(schemaName, schema)