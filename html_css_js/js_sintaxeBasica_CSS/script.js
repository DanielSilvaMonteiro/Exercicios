alert ("Olá seja bem vindo!");


//var geralemente é utilizado em global
var numero = 10, soma = 0;
console.log(typeof(numero));
console.log(numero);


function conta(){
//let geralmente é utilizado em local
soma = 10+ numero;
console.log(soma);
alert("conta realizada");
}
conta();

function passaProParagrafo(){
    
    let posicao = document.getElementById("div");
    let novoTexto = document.createTextNode(soma);
    let novoElemento = document.createElement('p');
    
    novoElemento.appendChild(novoTexto);
    posicao.appendChild(novoElemento);

}
passaProParagrafo();


