class TarefasDAO {

  static list(db) {
    return new Promise((resolve, reject) => {
      const sql = `SELECT * FROM TAREFAS;`
      db.all(sql, (err, tasks) => {
        if (err) {
          return reject(console.log(err));
        }
        return resolve(tasks)
      });
    })
  }

  static create(db, ...values) {
    return new Promise((resolve, reject) => {
      const sql = `INSERT INTO TAREFAS(TITULO, DESCRICAO, STATUS) VALUES (?,?,?);`
      db.run(sql, values, (err) => reject({
        erro: err
      }))
      resolve()
    })

  }

  static destroy(db, id) {
    return new Promise((resolve, reject) => {
      const sql = `DELETE FROM TAREFAS WHERE ID = ?;`
      db.run(sql, [id], (err) => reject({
        erro: err
      }))
      resolve()
    })
  }

  static update(db, req) {
    return Promise((resolve, reject) => {
      const sql = `UPDATE TAREFAS SET TITULO = ?, DESCRICAO = ?, STATUS = ? WHERE ID = ?;`
      db.run(sql, [req.body.titulo,
        req.body.descricao,
        req.body.status,
        req.params.id
      ], (err) => reject({
        erro: err
      }))
    })
  }
}

module.exports = TarefasDAO