//BIND - clona a função de chamada
const RETORNA_NOMES = function(){
    return this.nome;
};

let daniel = RETORNA_NOMES.bind({nome: 'Daniel'});

console.log(daniel());
daniel();//Daniel
