let buttonRandom = document.querySelector('#buttonRandom')

buttonRandom.addEventListener('click', Controller.mostraConselhoAleatorio)

let form = document.querySelector('#form')

form.addEventListener('submit', function(event){
    event.preventDefault()
    let inputSearch = document.querySelector('#inputSearch')
    let value = inputSearch.value
    Controller.mostrarConselhoPorBusca(value)
})
