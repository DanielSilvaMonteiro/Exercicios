//this dentro de um método ele referencia objeto
const pessoa = {
    firstName: "Daniel",
    lastName: "Monteiro",
    id: 1,
    fullName: function(){
        return this.firstName+ " " +this.lastName;
    },
    getId: function(){
        return this.id;
    }
}

console.log(pessoa.fullName()); // Daniel Monteiro
console.log(pessoa.getId()); // 1

//fora da função - vai pegar o nativo no caso do navegador vai pegar o window
console.log(this);

//dentro de uma função anonima - vai mostrar as propriedade global da fun135ão
(function(){
    console.log(this);
})();

//dentro de um objeto
const PESSOA = {
    firstName1: "Dan",
    lastName1: "Monteiro",
    getFullName: function(){
        console.log(`${this.firstName1} ${this.lastName1}`);
    },
};

PESSOA.getFullName();