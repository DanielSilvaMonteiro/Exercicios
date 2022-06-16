function multiplicaPorDois(arr){
    let multiplicados = [];

    for(let i= 0; i < arr.length; i++){
        multiplicados.push(arr[i]*2);
    }
    return multiplicados;
}

const MEUSNUMEROS = [2, 33, 456, 356, 40];

console.log(multiplicaPorDois(MEUSNUMEROS));//4,66,912,712,80

//FOR IN - loop entre propriedades enumeraveis de um objeto
function forInExemplo(obj){
    for(prop in obj){
        console.log(prop);
    }
}

const MEU_OBJETO ={
    nome: "Daniel",
    idade: "30",
    cidade: "São Paulo"
}

console.log(forInExemplo(MEU_OBJETO)); //nome idade cidade


function forInExemplo2(obj){
    for(prop in obj){
        console.log(obj[prop]);
    }
}

const MEU_OBJETO1 ={
    nome: "Daniel",
    idade: "30",
    cidade: "São Paulo"
}

console.log(forInExemplo2(MEU_OBJETO1)); //Daniel 30 São Paulo

//FOR OF - loop entre estruturas iteraveis (arrays, strings)
function logLetras(palavra){
    for(letra of palavra){
        console.log(letra);
    }
}
const PALAVRA = "abacaxi";
console.log(logLetras(PALAVRA)); //a-b-a-c-a-x-i

function logNumeros(nums){
    for (num of nums){
        console.log(num);
    }
}

const NUMS = [30, 20, 233,2];
console.log(logLetras(NUMS)); // 30-20-233-2