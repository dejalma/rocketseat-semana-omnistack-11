// import express from 'express'
// import routes from './routes.js'
const express = require('express')
const cors = require('cors')
const { errors } = require('celebrate')

const { routes } = require('./routes')

var app = express()

app.use(cors())
app.use(express.json())
app.use(routes)
app.use(errors())

app.listen(3333)
