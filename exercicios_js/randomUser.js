let imgPerfil = document.querySelector('#imgPerfil')
let name = document.getElementById('name')
let gender = document.querySelector('#gender')


let perfil = new XMLHttpRequest();

perfil.open('GET','https://randomuser.me/api/')


perfil.addEventListener('load', function(){
    let dados = JSON.parse(this.responseText)

    gender.textContent = dados.results[0].gender
    name.textContent = `${dados.results[0].name.last}, ${dados.results[0].name.first}`

    imgPerfil.src = dados.results[0].picture.large

})

// dados.results[0].picture.large

perfil.send()