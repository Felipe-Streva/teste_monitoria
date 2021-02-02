const db = require('../database/sqlite-db')

class UserDAO{

    static getAllUsersInDB(){
        return (new Promise( (resolve, reject) => {
            db.all(`SELECT * FROM user`, [], (err, rows) => {
                if(err) reject(err)
                else {
                    resolve(rows)
                }
            })
        }
                
        ))
    }

    static getUserByEmailInDB(email){
        return (new Promise( (resolve, reject) => {
            db.get(`SELECT * FROM user WHERE email = ?`, [email], (err, row) =>{
                if(err) reject(err)
                else {
                    resolve(row)
                }
            })
        }
                
        ))
    }

    static insertUserInDB(body){
        return (
            new Promise( (resolve, reject) => {
                db.run(`INSERT INTO user (email, senha) VALUES (?, ?)`, [body.email, body.senha], (err) =>{
                    if(err) reject(err)
                    else {
                        resolve({mensagem: "Usuario foi inserido com sucesso"})
                    }
                })
            })
        )

    }

    static deleteUserInDB(email){
        return (
            new Promise( (resolve, reject) => {
                db.run(`DELETE FROM user WHERE email = ?`, [email], (err) =>{
                    if(err) reject(err)
                    else {
                        resolve({mensagem: "Usuario foi deletado com sucesso"})
                    }
                })
            })
        )

    }

}

module.exports = UserDAO