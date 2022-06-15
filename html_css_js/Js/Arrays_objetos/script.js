//SPREAD
function sum(x,y,z){
    return x + y + z;
}

//para enviar os elementos do array basta usar o spreads ...
const NUMBERS = [1,2,3];
console.log(sum(...NUMBERS)); //spread 3 pontinhos


//REST - combina argumentos em um array

function confereTamanho(...args){
    console.log(args.length); 
    console.log(args);
}

console.log(confereTamanho()); //0
console.log(confereTamanho(1,2)); //2
console.log(confereTamanho(3,4,5)); //3


//Object Destructuring - entre chaves filtramos o que queremos usar

const USER ={
    id: 30,
    displayName: 'Daniel',
    fullName:{
        firstName: 'Silva',
        lastName:'Monteiro'
    }
};

function userId({id}){
    return id;
}

function userName({displayName}){
    return displayName;
}

function getFullName({fullName: {firstName: first, lastName: last}}){
    return `${first} ${last}`;
}

console.log(userId(USER));
console.log(userName(USER));
console.log(getFullName(USER));