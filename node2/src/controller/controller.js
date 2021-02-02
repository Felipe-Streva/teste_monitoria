const fetch = require('node-fetch');
const UserDAO = require('../DAO/userDAO')


class Controller{


    static getAllUsers(){
        return ( async (req, resp) => {
            try {
                const rows = await UserDAO.getAllUsersInDB()

                resp.send(rows)  
            } catch {
                resp.send('deu ruim')
            }
                      
            
    })}

    static getUserByEmail(){
        return ((req, resp) => {
            UserDAO.getUserByEmailInDB(req.params.email).then(row => resp.send(row))
            .catch(err => {
                console.log(err)
                resp.send('deu erro')
            })
        })
    }

    static insertUser(){
        return ((req, resp) => {
            if(req.body.email.length < 5){
                resp.send('email invalido')
            } else if(req.body.senha.length < 5){
                resp.send('a senha precisa ter 5 digitos')
            } else {
                UserDAO.insertUserInDB(req.body).then(msg => resp.send(msg))
                .catch(err => {
                    console.log(err)
                    resp.send('deu ruim')
                })

            }
            
        })
    }

    static checkLogin(){
        return (async  (req, resp) => {
            //fazer uma requisição para a rota /user/:email
            const user = await UserDAO.getUserByEmailInDB(req.body.email)
            //comparar a senha que veio do body, com a que veio da requisição
            if(req.body.senha === user.senha){
                resp.send('Voce esta logado')
            } else {
                resp.send('Senha incorreta')
            }
            // req.body.senha === row.senha
            //responder se esta logado ou nao
        })
    }

    static deleteUser(){
        return ((req, resp) => {
            UserDAO.deleteUserInDB(req.params.email).then(msg => resp.send(msg))
            .catch(err => {
                console.log(err)
                resp.send('deu erro')
            })
        })
    }

    static geraPaginaMonitoria(){
        return ((req, resp) => {
            fetch('https://api.adviceslip.com/advice')
                .then(dado => dado.json())
                .then(dado => resp.send(dado.slip.advice))
                .catch(err => console.log(err))
        })
    }

    static geraPaginaTeste(){
        return ((req, resp) => {
            resp.send('<h1>Teste da rota /teste</h1>')
        })
    }

    static geraPaginaTesteUsuario(){
        return ((req, resp) => {
            const bd = [{
                nome: "Felipe"
            },
            {
                nome: "Juliete"
            },
            {
                nome: "Scarlate"
            }]

            const userID = req.params.id
            const user = bd[userID-1].nome

            resp.send(`<h1>Bem-vindo ${user}</h1>`)
            
        })// O FULANO tem X laranjas e esse numero é PAR/IMPAR
    }

    static enviaConselho(){
        return ((req, resp) => {

            const nome = req.body.nome
            const senha = 'resilia'          

            if(req.body.senha == senha){
                resp.send(`<h1 style="color: red;">Voce está loggada</h1>`)

            } else {
                resp.send(' senha incorreta')
            }
            
                
        })
    }
}

module.exports = Controller