const express = require('express')
const mongoose = require('mongoose')
const app = express()

// GET      generic
// GET      generic/<id>
// POST     generic/
// PATH     generic/<id>
// DELETE   generic/<id>

// Connection

const pass   = 'jEj0Hwbxt56yNy29'
const dbname = 'voidapi'

const url = `mongodb+srv://HackerMan:${pass}@cluster0.ywnwm.gcp.mongodb.net/${dbname}?retryWrites=true&w=majority`

mongoose.connect(url, {useNewUrlParser:true, useUnifiedTopology: true })
const connection = mongoose.connection

app.use(express.json())
connection.on('open', () => {
    console.log('connected...')
})

const genericRouter = require('./routes/generic')
app.use('/generic',genericRouter)

app.listen(3600, () => {
    console.log('Server started')
})