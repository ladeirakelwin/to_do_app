const TarefasController = require('../controllers/tarefas-controller')
const tarefasController = new TarefasController()

module.exports = (app) => {
  app.get('/', tarefasController.mostraTarefas())
  app.post('/', tarefasController.geraTarefas())
  app.delete('/:id', tarefasController.apagaTarefas())
  app.put('/:id', tarefasController.atualizaTarefas())
}