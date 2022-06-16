/**Usar this para calcular idade
 *Usar call, apply para modificar os valores 
 */
const PESSOA1 = {
        nome: 'Daniel',
        idade: 30,
    };

const PESSOA2 ={
        nome: 'Danielly',
        idade: 29,
    };

const ANIMAL ={
        nome: 'Betoven',
        idade: 6,
        raca: 'Pincher',
    };

console.log(calculaIdade.call(PESSOA2, 30));
console.log(calculaIdade.call(ANIMAL, 7));
console.log(calculaIdade.apply(PESSOA1, [30]));
console.log(calculaIdade.apply(ANIMAL, [8]));

function calculaIdade(anos){
    return `Daqui a ${anos} anos, ${this.nome} terá ${this.idade + anos} anos de idade.`;
}

console.log(calculaIdade(ALUNOS, 5));