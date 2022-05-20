var currentNumberWrapper = document.getElementById('currentNumber');
var diminuir = document.getElementById('subtrair').addEventListener("click", decrement);
var aumentar = document.getElementById('adicionar').addEventListener("click", increment);
var currentNumber = 0;

function increment() {
    if(currentNumber <10){
        currentNumber = currentNumber + 1;
        currentNumberWrapper.innerHTML = currentNumber;     
    }

    if(currentNumber >= 0){
        currentNumberWrapper.style.color = 'black';
    }else{
        currentNumberWrapper.style.color = 'red';
    }
    
}


function decrement() {
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;

    if(currentNumber < 0){
        currentNumberWrapper.style.color = 'red';
    }else{
        currentNumberWrapper.style.color = 'black';
    }
}