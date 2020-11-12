class ModelsBusca{
    constructor(slips, query){
        this._slips = slips
        this._query = query
    }

    get arrayDeConselhos(){ 
        return {
            conselhos: this._slips,
            busca: this._query
        }
    }
}