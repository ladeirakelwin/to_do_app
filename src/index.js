const app = require('./custom-express')
const route = require('./routes/routes')
const port = 3000

app.listen(port, ()=> console.log("Funfo!"))

route(app)
