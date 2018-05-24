var express = require('express')
var bp = require('body-parser')
var app = express()
var cors = require('cors')
var port = 3000

app.use(cors())

require('./db/mlab-config')

app.use(bp.json())
app.use(bp.urlencoded({
    extended:true
}))

let auth = require('./auth/routes')
app.use(auth.session)
app.use(auth.router)