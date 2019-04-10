const express = require('express')
const mongoose = require('mongoose')
const path = require('path')

const app = express()

mongoose.connect('mongodb+srv://upload:upload1981DnsTld@cluster0-vq0qy.mongodb.net/upload?retryWrites=true', {
  useNewUrlParser: true
})

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/files', express.static(path.resolve(__dirname, '..', 'tmp')))

app.use(require('./routes'))

app.listen(3333)