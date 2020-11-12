class View {

    static inserirHTML(modelo){

        let textoRandom = document.querySelector('#textoRandom')

        textoRandom.textContent = modelo.advice
    }

    static inserirHTMLPorBusca(conselhos){
        let listaDeConselhos = document.querySelector('#listaDeConselhos')

        conselhos.conselhos.forEach(function(elemento){
            listaDeConselhos.innerHTML += `<li> ${elemento.id} - ${elemento.advice} - ${View.formatarData(elemento.date)} </li>`
        });
        
        listaDeConselhos.innerHTML += `<li>${conselhos.busca}</li>`
    }

    static formatarData(data){
        let formatando = data.split('-').join('/')
        return formatando
    }

}