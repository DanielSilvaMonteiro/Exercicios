//estrutura do tipo objeto
let obj = {

}

//tipo de dados
console.log(typeof obj);

//adicionando valor
obj.name = "Daniel";
console.log(obj);

//add idade
obj.age = "30";
console.log(obj);

//propredade values
console.log(Object.values(obj));

//chaves do Objeto
console.log(Object.keys(obj));

let person ={
    nome: "Dan",
    age: 30,
    adress: "Rua 2"
}

//retorno
console.log(person.nome);

console.log(person["name"]);

//adicionar
person["numberOfSiblings"] = 3;
console.log(person);

//adicionanando nome da mae como chave
let mom = "nameOfMom";
//adicionanando nome 
person[mom] = "Maria";
console.log(person);

//aqui adiciona o parametro (chave) + nome
person.mom = "Marta";
console.log(person);

