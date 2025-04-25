const readline = require ("readline-sync");
//Number transforma em numero igitnteiro
let primeria = Number (readline.question('qual sua primeira nota?'))
let segunda = Number (readline.question('qual sua segunda nota?'))
let terceira = Number  (readline.question('qual sua terceira nota?'))
 

function media(){
    return (primeria+segunda+terceira)/3;
} 
console.log(media());
