const readline = require ("readline-sync");
//para chamar a biblioteca 
let peso = parseInt (readline.question('Qual seu peso?'))
//ou number ( ) 
//parsefloat=se o núm tiver ponto ex:1.65
let altura = parseFloat(readline.question('Qual sua altura?'))
let imc = peso/(altura*altura)
//calculo para dividir
console.log ("seu imc é" +imc)


if (imc <18.5){
    console.log ("abaixo do peso")
}
else if (imc >=18.5 && imc <=24.9){
    console.log ("normal")

}
else if (imc <=25 && imc <30){
    console.log ("acima do peso")

}
else {
    console.log ("peso morbido")
}

    


