const app = require('./custom-express')
const route = require('./routes/routes')
const port = 3000
const cors = require('cors')
const bodyParser = require('body-parser')

app.use(cors())
app.use(bodyParser.json())
app.use(express.static('public'));

app.listen(port, ()=> console.log("Funfo!"))

route(app)
