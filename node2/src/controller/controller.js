const fetch = require('node-fetch');
const UserDAO = require('../DAO/userDAO')



class Controller{


    static getAllUsers(){
        return ((req, resp) => {
            UserDAO.getAllUsersInDB().then(rows => resp.send(rows))
            .catch(err => {
                console.log(err)
                resp.send('deu erro')
            })
        })
    }

    static getUserByEmail(){
        return ((req, resp) => {
            UserDAO.getUserByEmailInDB(req.params.email).then(row => resp.send(row))
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