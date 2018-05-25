var mongoose = require('mongoose')
var connectionString = 'mongodb://Samuel:test123@ds045785.mlab.com:45785/fullstack-music'
var connection = mongoose.connection


mongoose.connect(connectionString)

connection.on('error', err=>{
  console.log('ERROR FROM DATABASE: ', err)
})


connection.once('open', ()=>{
  console.log('Connected to Database')
})