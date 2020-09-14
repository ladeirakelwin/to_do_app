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
      db.run(sql, values, (err) => reject(console.log(err)))
      resolve()
    })

  }
}

module.exports = TarefasDAO