const pages = require('../view/view')

module.exports = (app) => {
  app.get('/', (req, res) =>
    res.send(pages)
  )
}