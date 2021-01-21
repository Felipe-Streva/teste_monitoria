const fetch = require('node-fetch');

class Controller{
    

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
            const idade = req.body.idade
            const nome = req.body.nome
            

            if(req.body.senha == 'resilia' && nome== 'Inara'){
                resp.send(`Voce está loggada`)

            } else {
                resp.send(' senha incorreta')
            }
            
                
        })
    }
}

module.exports = Controller