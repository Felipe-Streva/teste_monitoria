class Controller{
    constructor(){

    }

    static carregaInfos(){
        

        let pedido = new XMLHttpRequest()

        pedido.open('GET', `https://swapi.dev/api/starships/10`, false)

        pedido.addEventListener('load', () => {

            let dados = JSON.parse(pedido.responseText)
        })

        pedido.send()
    }


}