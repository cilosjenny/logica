//Importa a biblioteca readline-sync, que permite ler o que o usuário digita
const readline = require("readline-sync")

//cria um array vazio para armazenar os números digitados
let numeros = [];

//Define a variável numero como null (sem valor inicial)
let numero = null;

//Inicia o loop while que vai rodar até o usuário digitar 0
while (numero !==0) {
    //Pede um número ao usuário
    //readline.question()lê o que o usuário digita (como texto)
    //parseInt() converte esse texto em número inteiro
numero = parseInt(readline.question("Digite um numero: "));

//Se o número for diferente de 0, adiciona no array
if (numero !==0) numeros.push(numero);

}

//Usa o método reduxe para somar todos os números do array
//acc é o acumulador (soma parcial), val é cada número do array
//0 é o valor inicial do acumulador
let soma = numeros.reduce((acc, val) => acc + val, 0);

//Mostra o resultado final
console.log("Soma total", soma);