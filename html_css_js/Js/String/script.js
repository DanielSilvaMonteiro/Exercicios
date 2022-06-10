let nome = "João";
let sobrenome = "Pedro";

typeof nome;

//concatena nome + sobrenome;
let concatenado = nome.concat(sobrenome);
typeof concatenado;

concatenado.length;

//reconhece como tipo string
let vazio ="";
typeof vazio;

//encontrando index de uma string
console.log(nome);
console.log(nome[1]);

//outra forma de concatenar
console.log(concatenado);
concatenado = nome + " " + sobrenome;
console.log(concatenado);

//javascript scapes - utilizando quebra linha
concatenado = nome +" \n"+sobrenome;
console.log(concatenado);

//escrever direto sem + ou \n
concatenado = `${nome} ${sobrenome}`;
console.log(concatenado);


concatenado = `${nome} 
${sobrenome}`;
console.log(concatenado);


//usando aspas
concatenado = "\""
console.log(concatenado);

//usando split
let frase = "Olá, mundo tudo bem?";
frase.split("");
frase.split(" ");

//se variável contem algo
frase.includes("tudo");

//se inicia com
console.log(frase);
frase.startsWith("O");
frase.startsWith("R");

//termina com
frase.endsWith("?");

//replace
let stringModificada = frase.replace(",", "!");
console.log(stringModificada);
console.log(frase);


//exemplo utilizando String com S maiusculo = objeto;

let exemplo = new String ("blablabla");

typeof exemplo;

console.log(exemplo);

