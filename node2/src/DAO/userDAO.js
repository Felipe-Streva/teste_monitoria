const db = require('../database/sqlite-db')

class UserDAO{

    static getAllUsersInDB(){
        return (new Promise( (resolve, reject) => {
            db.all(`SELECT * FROM user`, [], (err, rows) =>{
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

}

module.exports = UserDAO