var router = require('express').Router()
var Users = require('../models/user')

router.put('/api/users/:id', (req, res, next) => {
  Users.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    })
    .then(user => {
      res.status(200).send({
        message: "Successfully Updated",
        user
      })
    })
    .catch(err => {
      res.status(400).send(err)
    })
})

router.post('/api/users', (req, res, next) => {
  var user = req.body
  Users.create(user)
    .then(newPost => {
      res.status(200).send(newPost)
    })
    .catch(err => {
      res.status(400).send(err)
    })
})

router.delete('/api/users/:id', (req, res, next) => {
  Users.findByIdAndRemove(req.params.id)
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