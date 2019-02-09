class CalcControlle{

    constructor(){
        // _ representa o private
        this._displayCalc = "0" ;
        this._currentDate;
        this.initialize();
    }

    initialize(){
        let displayElement = document.querySelector('#display');
        let dateElement = document.querySelector('#data');
        let timeElement = document.querySelector('#hora');

        displayElement.innerHTML = '4567';
        dateElement.innerHTML = '09/02/2019';
        timeElement.innerHTML = '19:50';
    }

    get displayCalc(){
        return this._displayCalc;
    }

    get dataAtual(){
        return this._currentDate;
    }

    set displayCalc( value ){
        this._displayCalc = value;
    }

    set dataAtual( value ){
        this._currentDate = value;
    }
}
