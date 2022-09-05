const prompt = require("prompt-sync")()

let a = Number(prompt("Entre com a sua idade em anos: "))

let m = Number(prompt("Entre com a sua idade em meses: "))

let d = Number(prompt("Entre com a sua idade em dias: "))

d = (a * 365 + m * 30 + d)

console.log(`A sua idade em dias é: ${d}`)