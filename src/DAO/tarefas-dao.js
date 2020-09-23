class TarefasDAO {

  static list(db) {
    return new Promise((resolve, reject) => {
      const sql = `SELECT * FROM TAREFAS WHERE STATUS <> "FILED";`
      db.all(sql, (err, tasks) => {
        if (err) {
          return reject(console.log(err));
        }
        return resolve(tasks)
      });
    })
  }

  static create(db, req) {
    return new Promise((resolve, reject) => {
      const sql = `INSERT INTO TAREFAS(TITULO, DESCRICAO, STATUS) VALUES (?,?,?);`
      console.log(req.body)
      db.run(sql, [req.body.titulo,
        req.body.descricao,
        req.body.status], (err) => reject({
        erro: err
      }))
      resolve()
    })

  }

  static destroy(db, req) {
    return new Promise((resolve, reject) => {
      const sql = `DELETE FROM TAREFAS WHERE ID = ?;`
      db.run(sql, [req.params.id], (err) => reject({
        erro: err
      }))
      resolve()
    })
  }

  static update(db, req) {
    return new Promise((resolve, reject) => {
      const sql = `UPDATE TAREFAS SET TITULO = ?, DESCRICAO = ?, STATUS = ? WHERE ID = ?;`
      db.run(sql, [req.body.titulo,
        req.body.descricao,
        req.body.status,
        req.body.idTarefa
      ], (err) => reject({
        erro: err
      }))
      resolve()
    })
  }
}

module.exports = TarefasDAO