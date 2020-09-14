const db = require('../configs/database/db')
const pages = require('../view/view')
const TarefasDAO = require('../DAO/tarefas-dao')



class TarefasController{
  constructor(){
  }

  mostraTarefas(){
    return (req, res) => {
      TarefasDAO
      .list(db)
      .then((tasks) => {
        if(tasks.length > 0){
          res.send(pages(tasks))
        }
      })
      .catch(error => console.log(error))
    }
  }

  geraTarefas(){
    return (req, res) => {
      TarefasDAO
      .create(db, req.body.titulo,
        req.body.descricao,
        req.body)
      .then(() => this.mostraTarefas())
      .catch((err) => console.log(err))
    }
  }
  

}

module.exports = TarefasController