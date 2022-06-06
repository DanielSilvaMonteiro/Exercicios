//var e let

var a = 1;
var b = 2;
var primeiroNome = "João";
var ultimoNome = "Souza";

if(a == 1){
    var a = 11; //escopo global
    let b = 22; //reatribuição de valor usando let, scopo local

    console.log(a); //11
    console.log(b); //22
}

    console.log(a); //11
    console.log(b); //2

    if(primeiroNome === "João"){
        var primeiroNome = "Pedro";
        let ultimoNome = "Silva"

        console.log(primeiroNome, ultimoNome);
    }

    console.log(primeiroNome, ultimoNome);