//Pré-ES2015
function exponencial2(array, num1){
    if(num1 === undefined){
        num1= 1;
    }
    const RESULT1 = [];

    for(let j = 0; j < array.length; j++){
        RESULT1.push(array[j]**num1);
}
return RESULT1;
}

console.log(exponencial2([1,2,3,4])); //1,2,3,4
console.log(exponencial2([1,2,3,4],4)); //1,8,27,64


//Pós-ES2015
function exponencial(array, num=1){
    const RESULT = [];

    for(let i = 0; i < array.length; i++){
        RESULT.push(array[i]**num);
}
return RESULT;
}

console.log(exponencial([1,2,3,4])); //1,2,3,4
console.log(exponencial([1,2,3,4],4)); //1,8,27,64

function findMax(){
    let max = -Infinity; // numeros positivos e negativos

    for(let a = 0; a < arguments.length; a ++){
        if(arguments[a] > max){
            max = arguments[a];
        }
    }
    return max;
}
console.log(findMax(1,2,3,6,90,1));
//findMax(1,2,3,6,90,1) <-90

function showArgs(){
    return arguments;
}
console.log(showArgs(1,2,[2,3,4],"string"));