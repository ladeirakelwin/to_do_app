const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()

app.use(express.static('public'));
app.use(cors())
app.use(bodyParser.json())

module.exports = app