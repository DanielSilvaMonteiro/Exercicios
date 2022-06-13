const CALC = function(operacao, num1, num2){
    return operacao(num1,num2);
}

const SOMA = function(num1, num2){
    return num1 + num2;
}

const SUB = function(num1, num2){
    return num1 - num2;
}

const RESULT_SOMA = CALC(SOMA, 1, 2);
const RESULT_SUB = CALC(SUB, 1, 2);


console.log(RESULT_SUB); //-1
console.log(RESULT_SOMA); //3