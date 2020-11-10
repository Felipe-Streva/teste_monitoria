class Models {
    constructor(advice){
        this._advice = advice
    }

    get modelo(){
        return {
            advice: this._advice
        }
    }

}