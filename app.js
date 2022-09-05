const prompt = require("prompt-sync")()

//output
//console.log("Olá Mundo")

//Exemplo de um código em javascript
console.log("Bem Vinde\n")

//const - constante / let - declarando variaveis
let nome = prompt("Digite o seu nome: ")

let idade = Number(prompt("Digite sua Idade: "))

let altura = Number(prompt("Digite a sua Altara: "))

console.log(`Olá meu nome é ${nome}, Tenho ${idade} anos de idade, e eu tenho ${altura} de altura.`)
