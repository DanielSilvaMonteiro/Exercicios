const PESSOA ={
    nome: "Daniel",
};

const ANIMAL ={
    nome: 'Murphy',
};

function getSomething(){
    console.log(this.nome);
}

getSomething.call(PESSOA);
getSomething.call(ANIMAL);

//CALL com paramtros

const MYOBJ = {
    num1: 2,
    num2: 4,
};

function soma(a,b){
    console.log(this.num1 + this.num2 + a + b);
}

soma.call(MYOBJ,1,5); //2+4,+1,+5

