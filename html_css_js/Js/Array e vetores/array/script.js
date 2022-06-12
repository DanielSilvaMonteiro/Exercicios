let array = [];

/**outra opção não usual
 * let array = new Array();
 */

//adicionando na terceira opção mas como ele não tem nada vai ser o primeiro
array.push(3);
console.log(array);

array.push(2);
console.log(array);

//retira do final do array
array.pop();
console.log(array);

array.push(2);
array.push(5);
console.log(array);

//shift tira do primeiro
array.shift();
console.log(array);

//adiciona no primeiro array
array.unshift(1);
console.log(array);

for(let i = 0; i < array.length;i++){
    console.log(array[i]);
}

//se inclui 3
console.log(array.includes(3));

//se todos são 5
console.log(array.every(item => item ===5));

//se algum é 5
console.log(array.some(item => item ===5));

//reverter
console.log(array.reverse());
