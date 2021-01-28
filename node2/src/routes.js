const Controller = require('./controller/controller')

module.exports = (app) => {

    app.get('/monitoria', Controller.geraPaginaMonitoria())    

    app.get('/teste', Controller.geraPaginaTeste())

    app.get('/teste/:id', Controller.geraPaginaTesteUsuario())

    app.get('/', (req, resp) => {
        resp.send('<h1>redirecionado</h1>')
    })

    app.post('/teste', Controller.enviaConselho())

    app.get('/user' , Controller.getAllUsers())

    app.get('/user/:email', Controller.getUserByEmail())

}

