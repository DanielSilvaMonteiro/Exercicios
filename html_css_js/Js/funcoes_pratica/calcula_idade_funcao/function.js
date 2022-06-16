/**Criar um array que exiba o numero de alunos aprovados e sua media
 * percorre o array e popule um novo array para auxiiar para receber os resultados das notas maiores ou igual a média
 *usar a técnica de object structure para manipuar as propriedades de cada aluno 
 */
const ALUNOS = [
    {
        nome: 'Daniel',
        nota: 5,
        turma: '1B',
    },

    {
        nome: 'Danielly',
        nota: 9,
        turma: '1B',
    },

    {
        nome: 'Akira',
        nota: 6,
        turma: '2C',
    },

    {
        nome: 'Miguel',
        nota: 3,
        turma: '1C',
    },
];

function alunosAprovados(arr,media){
    let aprovados = [];

    for(let i = 0; i < arr.length; i++){
        
        const {nota,nome} = arr[i];
        
        if (nota >= media){
             aprovados.push(nome);
        }
    }
    return aprovados;
}

console.log(alunosAprovados(ALUNOS, 5));