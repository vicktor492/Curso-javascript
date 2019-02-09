class Phone {

    constructor(){
        this.cor = 'gold';
    }

    ligar(){
        return "Ligando";
    }

}

let celular = new Phone();

console.log(celular.ligar());