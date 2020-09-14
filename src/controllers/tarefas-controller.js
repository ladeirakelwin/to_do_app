const db = require('../configs/database/db')
const pages = require('../view/view')
const TarefasDAO = require('../DAO/tarefas-dao')


class TarefasController{
  geraTarefas(){
    return (req, res) => {
      const tarefasDAO = new TarefasDAO(db)
      tarefasDAO
      .listar()
      .then((tasks) => {
        if(tasks.length > 0){
          res.send(pages(tasks))
        }
      })
      .catch(error => console.log(error))
    }
  }
}

module.exports = TarefasController