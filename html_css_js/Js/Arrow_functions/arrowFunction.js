//função convencional
const HELLOWORLD = function(){
    return "Hello World";
}
console.log(HELLOWORLD());

//Arrow Function
const HELLOWORLD1 =() => {
    return "Helloo world";
}
console.log(HELLOWORLD1());

//Arrow function com uma linha só não precisa do retorno
const HELLOWORLD2 = () => "Helooo word!";
console.log(HELLOWORLD2());

const SOMA = (a,b) => a+b;
console.log(SOMA(4,6)); //10

const SOMA1 = a => a;
console.log(SOMA1(4)); //4

//Arrow function não faz hoisting
console.log(SOMA2(2,4));

function SOMA2(a,b){
    return a+b;
}

//erro ao tentar igual o exemplo acima, não faz hoisting por ser uma constante
console.log(SOMA3(2,3));

const SOMA3 = (a,b) => a+b;