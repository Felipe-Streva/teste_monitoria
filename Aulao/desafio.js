

function desafio(str){

    let arr = str.split(' ')    // arr = ['Felipe', 'Nunes']

    if(!((arr.length + false) > (1 + true))){   // !(2 > 2)
        arr.join('/') // 'Felipe/Nunes'

        return arr + '!' // 'Felipe,Nunes!'
    } else{
        return arr.join(' ')
    }

}

console.log(desafio('Felipe Streva Nunes')) // "Felipe Streva Nunes"


console.log(desafio('Felipe Nunes'))   // 'Felipe,Nunes!'