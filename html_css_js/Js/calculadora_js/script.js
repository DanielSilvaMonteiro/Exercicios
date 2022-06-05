function calculadora(){
    const operacao = Number(prompt("Escolha um número para a operação \n 1 - Soma (+)\n 2 - Subtração (-)\n 3 - Multiplicação (*)\n 4 - Divisão real (/)\n 5 - Divisão inteira (%)\n 6 - Potenciação (**) "));
    //console.log(operacao);

    //verificação de seleção do menu
    if(!operacao || operacao >= 7){
        alert(`Operação inválida`);
        calculadora();
    }else{


    //leitura de valores
    let n1 = Number(prompt("Insira o primeiro valor"));
    let n2 = Number(prompt("Insira o segundo valor"));
    let resultado;

    //verificação da leitura dos valores
    if(!n1 || !n2){
        alert(`Erro - Parametro inválido`);
        calculadora();
    }else{


//Operação soma
function soma(){
    resultado = n1 + n2;
    alert(`${n1}+${n2} = ${resultado}`);
    novaOperacao();
}

//Operação subtração
function subtracao(){
    resultado = n1 - n2;
    alert(`${n1}-${n2} = ${resultado}`);
    novaOperacao();
}

//Operação multiplicsção
function multiplicacao(){
    resultado = n1 * n2;
    alert(`${n1}*${n2} = ${resultado}`);
    novaOperacao();
}

//Operação Divisão Real
function divisaoReal(){
    resultado = n1 / n2;
    alert(`${n1}/${n2} = ${resultado}`);
    novaOperacao();
}

//Operação Divisão Inteira
function divisaoInteira(){
    if(n1 >= n2){
        resultado = n1 % n2;
        alert(`O  resto da divisão entre ${n1} e ${n2} é igual a = ${resultado}`);
        novaOperacao();
    }else{
        alert(`A operação não pode ser realizada`);
        novaOperacao();
    }
}

//Operação potenciação
function potenciacao(){
    resultado = n1 ** n2;
    alert(`${n1}**${n2} = ${resultado}`);
    novaOperacao();
}

//Deseja uma nova operação
function novaOperacao(){
    let opcao = prompt(`Deseja fazer outra operação? \n 1 - SIM\n 2- NÃO`);
    if(opcao == 1){
        calculadora();
    }else if(opcao == 2){
        alert(`Até breve!`);
    }else{
        alert(`Digite uma opção válida`);
        novaOperacao();
    }
   }

   //Seleciona a operação
   switch (operacao){
    case  1:
        soma();
    break;
    case 2:
        subtracao();
    break;
    case 3:
        multiplicacao();
    break;
    case 4:
        divisaoReal();
    break;
    case 5:
        divisaoInteira();
    break;
    case 6:
        potenciacao();
    break;
    default:
        alert(`Operação inválida`);
        calculadora();
    break;
    }

    }
    }

}

calculadora();

//Seleção da operação
/*if(operacao == 1){
    soma();
}else if (operacao == 2){
    substracao();
}else if (operacao == 3){
    multiplcacao();
}else if (operacao ==4){
    divisaoReal();
}else if (operacao == 5){
    divisaoInteira();
}else if (operacao == 6){
    potenciacao();
    }*/