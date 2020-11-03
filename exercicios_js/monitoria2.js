let img = document.querySelector('#imgAviao')

let buttons = document.querySelectorAll('button')

for(let btn of buttons){
    btn.addEventListener('click', function(){
        btn.style.color = 'blue'
    })
    btn.addEventListener('mouseout', function(){
        btn.style.color = 'red'
    })
}

function bgPurple(btn){
    btn.style.backgroundColor = 'purple'
}



buttons.forEach(bgPurple)




function explodeAviao(){
    img.style.display = 'none'
}

let aviao = {
    qtdAsas: 2,
    ligado: false,
    ligar: function(){
        if(this.combustivel==0){
            this.ligado = false
            console.log('Aviao sem combustivel')
            return 'Aviao sem combustivel'
        }
        console.log('VRUM VRUM VRUM')
        this.ligado = true
    },
    desligar: function(){
        this.ligado = false
        console.log('Avião Desligado')
    },
    velocidade: 0,
    combustivel: 100,
    acelerar: function(){
        if(this.combustivel==0){
            this.ligado = false
            console.log('Avião sem combustível')
            return 'Aviao sem combustivel'
        }
        if(this.ligado==true){
            this.velocidade += 30
            this.combustivel--
            img.style.marginLeft = `${this.velocidade}`
            console.log(this.velocidade)
            return this.velocidade
        } else {
            console.log('Avião desligado')
        }
        
    },
    freiar: function(){
        if(this.velocidade==0){
            console.log('Já estamos parados')
            return 'Já estamos parados'
        }
        this.velocidade -= 30
        img.style.marginLeft = `${this.velocidade}`
        console.log(this.velocidade)
        return this.velocidade
    },
    altitude: 0,
    ganharAltitude: function(){
        if(this.combustivel==0){
            this.ligado = false
            console.log('Avião sem combustível')
            return 'Aviao sem combustivel'
        }
        if(this.velocidade>=200){
            this.altitude +=200
            this.combustivel--
            img.style.marginBottom = `${this.altitude/10}`
            console.log(`A altitude é ${this.altitude}`)
            return `A altitude é ${this.altitude}`
        } else {
            console.log('velocidade muito baixa')
            return 'velocidade muito baixa'
        }
    },
    perderAltitude: function(){
        if(this.altitude>=200){
            this.altitude -=200
            img.style.marginBottom = `${this.altitude/10}`
            console.log(`A altitude é ${this.altitude}` )
            return `A altitude é ${this.altitude}`   
        }
        console.log('Já estamos muito baixos')
        return 'Já estamos muito baixos'
        
    }

}