//APPLY - semelhante ao call
const PESSOA ={
    nome: "Daniel",
};

const ANIMAL ={
    nome: 'Murphy',
};

function getSomething(){
    console.log(this.nome);
}

getSomething.apply(PESSOA);
getSomething.apply(ANIMAL);

//CALL com paramtros -semelhante ao call mas usa [paramtros]

const MYOBJ = {
    num1: 2,
    num2: 4,
};

function soma(a,b){
    console.log(this.num1 + this.num2 + a + b);
}

soma.apply(MYOBJ,[1,5]); //2+4,+1,+5

