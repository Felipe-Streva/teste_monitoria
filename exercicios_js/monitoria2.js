let img = document.querySelector('img')


let aviao = {
    qtdAsas: 2,
    ligado: false,
    ligar: function(){
        if(aviao.combustivel==0){
            aviao.ligado = false
            console.log('Aviao sem combustivel')
            return 'Aviao sem combustivel'
        }
        console.log('VRUM VRUM VRUM')
        aviao.ligado = true
    },
    desligar: function(){
        aviao.ligado = false
        console.log('Avião Desligado')
    },
    velocidade: 0,
    combustivel: 100,
    acelerar: function(){
        if(aviao.combustivel==0){
            aviao.ligado = false
            console.log('Avião sem combustível')
            return 'Aviao sem combustivel'
        }
        if(aviao.ligado==true){
            aviao.velocidade += 30
            aviao.combustivel--
            img.style.marginLeft = `${aviao.velocidade}`
            console.log(aviao.velocidade)
            return aviao.velocidade
        } else {
            console.log('Avião desligado')
        }
        
    },
    freiar: function(){
        if(aviao.velocidade==0){
            console.log('Já estamos parados')
            return 'Já estamos parados'
        }
        aviao.velocidade -= 30
        img.style.marginLeft = `${aviao.velocidade}`
        console.log(aviao.velocidade)
        return aviao.velocidade
    },
    altitude: 0,
    ganharAltitude: function(){
        if(aviao.combustivel==0){
            aviao.ligado = false
            console.log('Avião sem combustível')
            return 'Aviao sem combustivel'
        }
        if(aviao.velocidade>=200){
            aviao.altitude +=200
            aviao.combustivel--
            img.style.marginBottom = `${aviao.altitude/10}`
            console.log(`A altitude é ${aviao.altitude}`)
            return `A altitude é ${aviao.altitude}`
        } else {
            console.log('velocidade muito baixa')
            return 'velocidade muito baixa'
        }
    },
    perderAltitude: function(){
        if(aviao.altitude>=200){
            aviao.altitude -=200
            img.style.marginBottom = `${aviao.altitude/10}`
            console.log(`A altitude é ${aviao.altitude}` )
            return `A altitude é ${aviao.altitude}`   
        }
        console.log('Já estamos muito baixos')
        return 'Já estamos muito baixos'
        
    }

}