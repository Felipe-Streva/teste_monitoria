class Models {
    constructor(advice="volte amanhã"){
        this._advice = advice
    }

    get modelo(){
        return {
            advice: this._advice
        }
    }

}