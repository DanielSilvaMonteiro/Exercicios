
//declaração estrutura de repetição for
let array = ["valor1", "valor2", "valor3", "valor4", "valor5"];

let object = {propriedade1: "valor1", propriedade2: "valor2", propriedade3: "valor3"}

for(let indice = 0; indice < array.length; indice++){
    console.log(indice);
}

//for in - repetição a partir de uma propriedade - retorna os indices
for(let i in array){
    console.log(i);
}

//for in com object
for(i in object){
    console.log(i); //imprime propriedade1, propriedade2, propriedade3;
}

//for of - imprime os valores 
for(i of array){
    console.log(i);
}

//for of com object - objects não variam iguais a arrays
//é necessário passar a propriedade do object
for(i of object.propriedade1){
    console.log(i);     //vai imprimir uma letra de cada vez
}

//while vai estar em loop até a determinada condição
var a =0
while(a < 10){
    a++;
    console.log(a);
}

//do while - ficará em loop ate que uma determinada condição seja falsa
//a verificação é feita depois da execução
var b = 0;
do{
    b++;
    console.log(b);
}while(b < 10)