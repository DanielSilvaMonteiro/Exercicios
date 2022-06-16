//While - roda até uma consição falsa
function exemploWhile(){
    let num = 0;

    while(num <= 5){
        console.log(num);
        num ++;
    }
}

console.log(exemploWhile()); // 0-1-2-3-4-5

//DO WHILE - vai executar pelo menos uma vez
function exemploDoWhile(){
    let num =0;

    do{
        console.log(num);
        num ++;
    }while(num <= 5)
}

console.log(exemploDoWhile()); //0-1-2-3-4-5

function exemploDoWhile2(){
    let num = 6;

    do{
        console.log(num);
        num ++;
    }while(num <=5)
}

console.log(exemploDoWhile2());