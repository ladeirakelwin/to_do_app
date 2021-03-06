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
      .then(() =>  res.redirect("/"))
      .catch((err) => {{ok: err}})
    }
  }

  apagaTarefas(){
    return (req, res) => {
      TarefasDAO
      .destroy(db, req)
      .then(() => res.send(true))
      .catch((err) => res.send(false) )
    }
  }

  atualizaTarefas(){
    return (req, res) => {
      console.log()
      TarefasDAO
      .update(db, req)
      .then(() => res.redirect('/'))
      .catch((err) => res.send({erro: err}))
    }
  }
}

module.exports = TarefasController