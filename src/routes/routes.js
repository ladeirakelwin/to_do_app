const pages = require('../view/view')
const bd = require('../database/database')
require('sqlite3').verbose();

module.exports = (app) => {
  app.get('/:id', (req, res) =>{
    const pessoa = req.params.id
    res.send(pages(...bd[0].tarefas))
  })
}