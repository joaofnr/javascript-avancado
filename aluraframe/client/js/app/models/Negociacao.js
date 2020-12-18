class Negociacao{

    constructor(data, quantidade, valor){
        this._data = new Date(data.getTime()); // defensive programming
        this._quantidade = quantidade;
        this._valor = valor;

        //We won't make any other changes on this object
        Object.freeze(this);
    }

    get volume(){
        return this._quantidade * this._valor;
    }

    get data(){
        return new Date(this._data.getTime()); // defensive programming
    }

    get quantidade(){
        return this._quantidade
    }

    get valor(){
        return this._valor
    }
}