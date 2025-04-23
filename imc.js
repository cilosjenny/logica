const readline = require ("require-sync");

let peso = parseInt (readline.question('Qual seu peso?'))
let altura = parseInt (readline.question('Qual sua altura?'))

if (imc <18.5){
    console.log (abaixo do peso)
}
else if (imc >=18.5 && <=24,9){
    console.log (normal)

}
else if (imc <=25 && <30){
    console.log (acima do peso)

}
else (imc >=40) {
    console.log (peso morbido) 
}




