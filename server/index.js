var express = require('express')
var bp = require('body-parser')
var app = express()
var cors = require('cors')
var port = 3000

app.use(cors())

require('./server-assets/db/mlab-config')

app.use(bp.json())
app.use(bp.urlencoded({extended:true}))

var users = require('./server-assets/routes/users')
<<<<<<< HEAD
=======
//var songs = require('./server-assets/routes/songs')
>>>>>>> df6d80adf046a172a0a3a1062350eb8e8164ff21
var playlists = require('./server-assets/routes/playlists')

app.use(bp.json())
app.use(bp.urlencoded({extended: true}))

app.use(users.router)
<<<<<<< HEAD
=======
//app.use(songs.router)
>>>>>>> df6d80adf046a172a0a3a1062350eb8e8164ff21
app.use(playlists.router)


//catch all
app.get('*', (req, res, next)=>{
    res.status(404).send({error: 'No matching routes'})
  })
  
  //port listener
  app.listen(port, ()=>{
    console.log('server running on port', port)
  })