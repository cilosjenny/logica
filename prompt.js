//chamar a biblioteca
const readline = require("readline-sync")


  //prompt criando uma caixa de pergunta para saber o nome do usuario
  let nome = prompt("Qual seu nome?");
  
  //trim = para remover os espaços em branco antes e depois da frase
  
  // === "" após o trim() é garantir que, mesmo que o usuário digite apenas espaços em branco, a string seja considerada vazia.

   if(nome.trim() === "") {
     console.log("Bem-vindo(a)" + nome + "!")
   
   } else{ 
     console.log("Bem-vindo(a) visitante!")
   }

