//colocando a biblioteca
const readline = require("readline-sync");

let um = Number (readline.question("primeira nota:"))
let dois = Number (readline.question("segunda nota:"))
let tres = Number (readline.question("terceira nota:"))

let media = (um+dois+tres)/3

console.log("sua média é:"+media)

if(media <6){
  console.log("reprovado")
}
//else n tem condição
else{
  console.log("aprovado")
}