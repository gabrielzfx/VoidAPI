const express = require('express')
const mongoose = require('mongoose')
const app = express()

const url = ''

mongoose.connect(url, {useNewUrlParser:true})
const connection = mongoose.connection

connection.on('open', () => {
    console.log('connected...')
})

app.use(express.json())

const genericRouter = require('./routes/generic')
app.use('/generic',genericRouter)

app.listen(9000, () => {
    console.log('Server started')
})