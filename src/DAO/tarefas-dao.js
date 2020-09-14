class TarefasDAO {
  constructor(db) {
    this._db = db;
  }

  listar() {
    return new Promise((resolve, reject) => {
      const sql = `SELECT * FROM TAREFAS`
      this._db.all(sql, (err, tasks) => {
        if (err) {
          return reject(console.log(err));
        }
        return resolve(tasks)
      });
    })
  }
}

module.exports = TarefasDAO