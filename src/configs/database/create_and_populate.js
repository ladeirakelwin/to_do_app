// Executar somente para criar o banco uma vez
// const sqlite3 = require('sqlite3').verbose();
// const db = new sqlite3.Database('./database.db');


// const TAREFAS_SCHEMA = `
// CREATE TABLE IF NOT EXISTS TAREFAS (
//     id INTEGER PRIMARY KEY AUTOINCREMENT, 
//     titulo VARCHAR(64),
//     descricao TEXT,
//     status VARCHAR(32)
// )
// `;

// const ADD_TAREFAS = `
// INSERT INTO TAREFAS (
//     titulo,
//     descricao,
//     status
//     )
// VALUES ('Yoga', 'Fazer yoga segunda e quarta', 'Continuo'),
//        ('Médico', 'Consulta com Dr. Ayrton sexta', 'TODO'),
//        ('Pagar contas', 'Pagar boletos de água e luz', 'DOING')
// `

// db.serialize(() => {
//   db.run(TAREFAS_SCHEMA, (err) => {
//     if (err) {
//       console.log('Erro na criação da tabela tarefas');
//       process.exit(1);
//     }
//   });
//   db.run(ADD_TAREFAS, (err) => {
//     if (err) {
//       console.log('Erro ao adicionar valores ao banco');
//       process.exit(1);
//     }
//   })
// })