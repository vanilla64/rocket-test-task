const express = require('express')
const mongoose = require('mongoose')
const router = require('./routes/router')
const helmet = require('helmet')
const cors = require('cors')

const { PORT } = require('./utils/constants')
const { DB_URL, mongooseOptions } = require('./utils/mongoConfig')
const { centralizedError } = require('./utils/errors/centralizedError')

const app = express()

app.use(helmet())
app.use(cors())

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

mongoose.connect(DB_URL, mongooseOptions)

app.use('/', router)

app.use(centralizedError)

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`)
})
