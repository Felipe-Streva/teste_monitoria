
let aviao = {
    qtdAsas: 2,
    ligado: false,
    ligar: function(){
        if(aviao.combustivel==0){
            aviao.ligado = false
            return 'Aviao sem combustivel'
        }
        console.log('VRUM VRUM VRUM')
        aviao.ligado = true
    },
    desligar: function(){
        aviao.ligado = false
    },
    velocidade: 0,
    combustivel: 100,
    acelerar: function(){
        if(aviao.combustivel==0){
            aviao.ligado = false
            return 'Aviao sem combustivel'
        }
        if(aviao.ligado==true){
            aviao.velocidade += 30
            aviao.combustivel--
            return aviao.velocidade
        } else {
            console.log('Avião desligado')
        }
        
    },
    freiar: function(){
        if(aviao.velocidade==0){
            return 'Já estamos parados'
        }
        aviao.velocidade -= 30
        return aviao.velocidade
    },
    altitude: 0,
    ganharAltitude: function(){
        if(aviao.combustivel==0){
            aviao.ligado = false
            return 'Aviao sem combustivel'
        }
        if(aviao.velocidade>=200){
            aviao.altitude +=200
            aviao.combustivel--
            return `A altitude é ${aviao.altitude}`
        } else {
            return 'velocidade muito baixa'
        }
    },
    perderAltitude: function(){
        if(aviao.altitude>=200){
            aviao.altitude -=200
            return `A altitude é ${aviao.altitude}`   
        }
        return 'Já estamos muito baixos'
        
    }

}