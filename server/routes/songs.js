var router = require('express').Router()
var Songs = require('../models/song')

router.get('/api/songs', (req, res, next) => {
  Songs.find(req.query)
    .then(songs => {
      res.status(200).send(songs)
    })
    .catch(err => {
      res.status(400).send(err)
    })
})

router.put('/api/songs/:id', (req, res, next) => {
  Songs.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    })
    .then(song => {
      res.status(200).send({
        message: "Successfully Updated",
        song
      })
    })
    .catch(err => {
      res.status(400).send(err)
    })
})

router.post('/api/songs', (req, res, next) => {
  var song = req.body
  Songs.create(song)
    .then(newSong => {
      res.status(200).send(newSong)
    })
    .catch(err => {
      res.status(400).send(err)
    })
})

router.delete('/api/songs/:id', (req, res, next) => {
  Songs.findByIdAndRemove(req.params.id)
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