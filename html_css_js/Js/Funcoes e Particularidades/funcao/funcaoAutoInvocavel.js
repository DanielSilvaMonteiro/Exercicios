//auto intocavel
(
    function(){
        let name ="Daniel Monteiro";
        return console.log(name);
    }
)();

//Daniel Monteiro

(
    function(a,b){
        return console.log(a+b);
    }
)(1,2);

const SOMA3 = (
    function(a,b){
        return a + b ;
    }
)(1,2);

console.log(SOMA3); //3