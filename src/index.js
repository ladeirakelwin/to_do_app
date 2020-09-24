const app = require('./custom-express')
const route = require('./routes/routes')
const port = process.env.PORT || 3000


app.listen(port, ()=> console.log("Funfo!"))

route(app)
