function numeroPositivo(num){
    let resultado;

    if(num < 0){
        resultado = false;
    }else{
        resultado = true;
    }
    return resultado;
}

console.log(numeroPositivo(2)); //true
console.log(numeroPositivo(-9)); //false

//boas praticas
function numeroPositivo1(num1){
    let resultado1;

    const EHNEGATIVO = num1 < 0;

    if(EHNEGATIVO){
        resultado1 = false;
    }else{
        resultado1 = true;
    }
    return resultado1;
}

console.log(numeroPositivo1(2)); //true
console.log(numeroPositivo1(-9)); //false

//Outra forma
function numeroPositivo2(num2){
    const EHNEGATIVO1 = num2 < 0;

    if(EHNEGATIVO1){
        return false;
    }
    return true;
}

console.log(numeroPositivo2(2)); //true
console.log(numeroPositivo2(-9)); //false


//Positivo, negativo, positivo maior que 10
function numeroPositivo3(num3){
    const EHNEGATIVO3 = num3 < 0;
    const MAIOR_QUE_DEZ = num3 > 10;

    if(EHNEGATIVO3){
        return "Esse número é negativo!";
    }else if(!EHNEGATIVO3 && MAIOR_QUE_DEZ){
        return "Esse número é positivo e maior que 10";
    }else{
        return "Esse número é positivo";
    }
}
console.log(numeroPositivo3(2));
console.log(numeroPositivo3(-2));
console.log(numeroPositivo3(40));


//SWITCH/CASE

function getAnimal(id){
    switch(id) {
        case 1:
            return "cão";
            break;
        case 2:
            return "gato";
            break;
        case 3:
            return "pássaro";
            break;
        default:
            return "peixe";
            break;
    }
}

console.log(getAnimal(1));
console.log(getAnimal(2));
console.log(getAnimal(3));
console.log(getAnimal("1"));