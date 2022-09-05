const prompt = require("prompt-sync")()

let a = Number(prompt("Digite o primeiro número: "))

let b = Number(prompt("Digite o segundo número: "))

let c = Number(prompt("Digite o terceiro número: "))

if(a < b && a < c){
    if(b < c)
    console.log(`A ordem crescente do número é: ${a} ${b} e ${c}`)
    else
    console.log(`A ordem crescente do número é: ${a} ${c} e ${b}`)
}
if(b < a && a < c){
    if(a < c)
    console.log(`A ordem crescente do número é: ${b} ${a} e ${c}`)
    else
    console.log(`A ordem crescente do número é: ${b} ${c} e ${a}`)
}
if(c < a && c < b){
    if(c < a)
    console.log(`A ordem crescente do número é: ${c} ${b} e ${a}`)
    else
    console.log(`A ordem crescente do número é: ${c} ${a} e ${b}`)
}
