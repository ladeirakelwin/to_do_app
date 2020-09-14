const app = require('./custom-express')
const route = require('./routes/routes')
const port = 3000
const bodyParser = require('body-parser')


app.use(bodyParser.json())

app.listen(port, ()=> console.log("Funfo!"))

route(app)
