class Controller {

    static rotaTeste(){
        return ((req, resp) => {
            resp.send(`rota /teste`)})
    }

    static rotaBarra(){
        return ((req, resp) => {
            resp.send(`rota /`)})
    }

    static rotaMonitoria(){
        return ((req, resp) => {
            resp.send(`rota /monitoria aula com Felipe`)})
    }
}

module.exports = Controller