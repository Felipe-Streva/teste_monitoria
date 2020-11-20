let nome = document.querySelector('#nome')
let modelo = document.querySelector('#modelo')
let preco = document.querySelector('#preco')
let tamanho = document.querySelector('#tamanho')


class View {
    constructor(){}

    static carregaPagina(dados){
        nome.textContent = `Nome: ${dados.name}`
        modelo.textContent = `Modelo: ${dados.model}`
        preco.textContent = `Preco: ${dados.cost_in_credits} mangos`
        tamanho.textContent = `Tamanho: ${dados.length} metros`
    }
}