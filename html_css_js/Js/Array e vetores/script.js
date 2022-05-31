//como declarar um array
let array = ["String", 1 , true];
console.log(array);

//outras forms de declarar array
let array1 = ["String", 1 , true, ['array2'], ['array3'],['array4'],['array5'] ];
console.log(array1);
console.log(array1[0]);

//forEach necessita de um função com item e o index por exemplo
array1.forEach(function(item,index){
    console.log(item,index)
});

//push adiciona um novo item no fim do array
array.push("novo item");
console.log(array);

//pop remove um item do final do array
array1.pop();
console.log(array1);

//shift remove do inicio do array
array1.shift();
console.log(array1);

//unshift adiciona no inicio do array
array1.unshift("inicio");
console.log(array1);

//indexOf retorna um index de um valor
console.log(array.indexOf(true));

//splice remove ou adiciona um item pelo indice
//exemplo de apagar do indice 0 ao 3
array1.splice(0,3);
console.log(array1);

//slice retorna uma parte do array existente
let novoArray = array1.slice(0,3);
console.log(novoArray);

//Object possuem propriedades e valores que descrevem suas caracteristicas
let object={string: "string", number: 1, Boolean: true, array: [array], objectInterno: objectInt={object1 : "objectInterno"}}

console.log(object);
//abaixo imprimindo apenas parte do objeto conforme a solicitação
console.log(object.Boolean);
console.log(object.array);
console.log(object.number);
console.log(object.string);
console.log(object.objectInterno);

//desestruturação de um object
var string = object.string;
console.log(string);

var arrays = object.array;
console.log(arrays);

var{string, Boolean} = object;
console.log(string,Boolean);