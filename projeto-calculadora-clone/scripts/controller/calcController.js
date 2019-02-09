class CalcControlle{

    constructor(){
        // _ representa o private
        this._displayCalc = "0" ;
        this._currentDate;
        this.initialize();
    }

    initialize(){
        
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