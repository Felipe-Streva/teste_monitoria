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
}