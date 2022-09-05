//Printando o número maior

const prompt = require("prompt-sync")()

let num1 = Number(prompt("Digite o primeiro número: "))

let num2 = Number(prompt("Digite o segundo número: "))

let num3 = Number(prompt("Digite o terceiro número: "))

if(num1 > num2 && num1 > num3 ) {

    console.log(`O maior número é ${num1}`)

}else if(num2 > num3){
    console.log(`O número maior é ${num2}`)

}else{
    console.log(`O número maior é ${num3}`)
}