const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()

app.use('/static', express.static(__dirname + '/../public'));
app.use(cors())
app.use(bodyParser.json())

module.exports = app