const Controller = require('./controller/controller')

module.exports = (app) => {
    app.get('/teste', Controller.rotaTeste())

    app.get('/', Controller.rotaBarra())

    app.get('/monitoria', Controller.rotaMonitoria())
}
