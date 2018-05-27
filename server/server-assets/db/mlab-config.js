var mongoose = require('mongoose')
// var connectionString = 'mongodb://Samuel:test123@ds045785.mlab.com:45785/fullstack-music' //Sam server
var connectionString = 'mongodb://Jasper:student@ds133550.mlab.com:33550/music-fun' //Jasper Server
var connection = mongoose.connection


mongoose.connect(connectionString)

connection.on('error', err=>{
  console.log('ERROR FROM DATABASE: ', err)
})


connection.once('open', ()=>{
  console.log('Connected to Database')
})