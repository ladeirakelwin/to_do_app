const TarefasController = require('../controllers/tarefas-controller')
const tarefasController = new TarefasController()
module.exports = (app) => {
  app.get('/', tarefasController.geraTarefas())
}