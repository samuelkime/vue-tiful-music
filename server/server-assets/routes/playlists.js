var router = require('express').Router()
var Playlists = require('../models/playlist')

router.get('/api/playlists/:id?', (req, res, next) => {
  if(!req.params.id){
    Playlists.find({})
      .then(playlists => {
        res.status(200).send(playlists)
      })
      .catch(err => {
        res.status(400).send(err)
      })
  }else{
    Playlists.findById(req.params.id)
      .then(playlist=>{
       res.status(200).send(playlist)
      })
      .catch(err =>{
        res.status(400).send(err)
      })
  }
})

router.put('/api/playlists/:id', (req, res, next) => {
  Playlists.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    })
    .then(playlist => {
      res.status(200).send({
        message: "Successfully Updated",
        playlist
      })
    })
    .catch(err => {
      res.status(400).send(err)
    })
})

router.post('/api/playlists', (req, res, next) => {
  var playlist = req.body
  Playlists.create(playlist)
    .then(newPlaylist => {
      res.status(200).send(newPlaylist)
    })
    .catch(err => {
      res.status(400).send(err)
    })
})

router.delete('/api/playlists/:id', (req, res, next) => {
  Playlists.findByIdAndRemove(req.params.id)
    .then(data => {
      res.send("Successfully Removed")
    })
    .catch(err => {
      res.status(400).send(err)
    })
})


module.exports = {
  router
}