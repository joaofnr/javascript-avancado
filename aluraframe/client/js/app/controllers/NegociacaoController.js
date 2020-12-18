class NegociacaoController{

    constructor(){
        // we want to keep querySelector association with document
        let $ = document.querySelector.bind(document);

        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
    }

    adiciona(event){
        event.preventDefault();

        // a few ways to create a date object with input value
        //let data = new Date(this._inputData.value.split('-'));
        //let data = new Date(this._inputData.value.replace(/-/g, ','));
        //let dataValue = this._inputData.value.split('-');
        //let data = new Date(dataValue[0], dataValue[1]-1, dataValue[2]);

        // we can use ES6's spread operator combined with map and arrow function
        let data = new Date(...
            this._inputData.value
            .split('-')
            .map(
                (i, ix) => i - ix % 2
            )
        );

        let negociacao = new Negociacao(
            data, 
            this._inputQuantidade.value, 
            this._inputValor.value);

        console.log(negociacao);
    }
}