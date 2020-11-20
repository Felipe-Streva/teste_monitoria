class Pessoa {
    constructor(nome, idade, barba){
        this.nome = nome,
        this.idade = idade
        this.barba = barba
    }

    gritar(){
        console.log('BIRRRLLL')
    }

    fazerNiver(){
        this.idade++
    }

    fazerForça(){
        this.gritar()
    }

}
