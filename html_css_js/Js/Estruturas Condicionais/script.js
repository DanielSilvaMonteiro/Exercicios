//Exercicio de explicação de estrutura condicional
var jogador1 = 0;
var jogador2 = 1;
var placar;

//exemplo de if ternario
jogador1 != -1 && jogador2 != -1 ? console.log("Os jogadores são validos"):
console.log("Jogadores inválidos");
if(jogador1 > 0 && jogador2 == 0){
    console.log("Jogador1 marcou 1 ponto");
    placar = jogador1 > jogador2;
}else if(jogador2 > 0 && jogador1 == 0){
    console.log("Jogador2 marcou 1 ponto");
    placar = jogador2 > jogador1;
}else{
    console.log("ninguem marcou pontos");
}

switch (placar){
    case  placar = jogador1 > jogador2:
    console.log("Jogador 1 ganhou");
    break;
    case  placar = jogador2 > jogador1:
    console.log("Jogador 2 ganhou");
    break;
    default: console.log("ninguem ganhou");
}


/*if(jogador1 != -1 && jogador2!= -1){    //ifs encadeado/ aninhamento de ifs
    if(jogador1 > 0){
        console.log("Jogador1 marcou 1 ponto");
    }else if(jogador2 > 0){
        console.log("Jogador2 marcou 1 ponto")
    }else{
        console.log("ninguem marcou pontos");
    }
    }else{
        console.log("Placar incorreto");
    }*/

