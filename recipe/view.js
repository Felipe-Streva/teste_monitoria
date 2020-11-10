class View {

    static inserirHTML(modelo){

        let textoRandom = document.querySelector('#textoRandom')

        textoRandom.textContent = modelo.advice
    }


}