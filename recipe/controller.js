class Controller {

    static mostraConselhoAleatorio(){

        let requestRandom = new XMLHttpRequest();

        requestRandom.open('GET','https://api.adviceslip.com/advice', false)

        requestRandom.addEventListener('load', function(){

            let dados = JSON.parse(this.responseText)

            let advice = dados.slip.advice

            let models = new Models(advice) 

            View.inserirHTML(models.modelo)
            
        })


        requestRandom.send()
    }

    static mostrarConselhoPorBusca(value){

        let requestRandom = new XMLHttpRequest();

        requestRandom.open('GET',`https://api.adviceslip.com/advice/search/${value}`, false)

        requestRandom.addEventListener('load', function(){

            let dados = JSON.parse(this.responseText)

            let modelsBusca = new ModelsBusca(dados.slips, dados.query)

            View.inserirHTMLPorBusca(modelsBusca.arrayDeConselhos)
            
        })


        requestRandom.send()
    }


}