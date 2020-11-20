let button = document.querySelector('button')

let input = document.querySelector('#inputNaveId')

button.addEventListener('click', () => {
    Controller.carregaInfos(input.value)
})