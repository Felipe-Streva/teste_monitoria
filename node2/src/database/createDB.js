const sqlite = require('sqlite3').verbose()
const db = new sqlite.Database('database.db')


db.serialize(() => {
    db.run(`CREATE TABLE IF NOT EXISTS user (email varchar(256), senha varchar(20) )`)

    db.run(`INSERT INTO user (email, senha) VALUES ('fe@resilia.com', 'jaspion')`)

    db.run(`INSERT INTO user (email, senha) VALUES ('thome@resilia.com', 'jaspion')`)

    db.run(`INSERT INTO user (email, senha) VALUES ('erica@resilia.com', 'jaspion')`)

})
