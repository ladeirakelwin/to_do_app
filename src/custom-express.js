const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const app = express()

app.use('/static', express.static(__dirname + '/../public'));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
// app.use(methodOverride(function (req, res) {
//   if (req.body && typeof req.body === 'object' && '_method' in req.body && req.body._method != 'null') {
//     // look in urlencoded POST bodies and delete it
//     var method = req.body._method
//     delete req.body._method
//     return method
//   }
// }))

module.exports = app