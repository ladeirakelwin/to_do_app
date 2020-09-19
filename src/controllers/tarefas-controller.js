const db = require('../configs/database/db')
const pages = require('../view/view')
const TarefasDAO = require('../DAO/tarefas-dao')
const app = require('../custom-express')



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
      console.log(req.body)
      TarefasDAO
      .create(db, req)
      .then(() =>  res.send({"sadlkdas":"asdasdas"}))
      .catch((err) => {{ok: err}})
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
      .catch((err) => res.send({erro: err}))
    }
  }
}

module.exports = TarefasController