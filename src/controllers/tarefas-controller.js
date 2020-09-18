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
      .catch(error => (err) => {erro: err})
    }
  }

  geraTarefas(){
    return (req, res) => {
      TarefasDAO
      .create(db, req.body.titulo,
        req.body.descricao,
        req.body.status)
      .then(() => this.mostraTarefas())
      .catch((err) => {erro: err})
    }
  }

  apagaTarefas(){
    return (req, res) => {
      TarefasDAO
      .destroy(db, req.params.id)
      .then(() => this.mostraTarefas())
      .catch((err) => {erro: err} )
    }
  }

  atualizaTarefas(){
    return (req, res) => {
      TarefasDAO
      .update(db, req)
      .then(() => this.mostraTarefas())
      .catch((err) => {erro: err})
    }
  }
}

module.exports = TarefasController