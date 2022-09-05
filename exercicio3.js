/*
Solicitar a idade de várias pessoas e imprimir: Total de pessoas com menos de
21 anos. Total de pessoas com mais de 50 anos. O programa termina quando
idade para =-99. (ENQUANTO)
*/

const prompt = require("prompt-sync")()

let cont21 = 0
let cont50 = 0
let idade = Number(prompt("Digite sua idade: "))


    
while(idade <= 98){

    if(idade < 21){cont21 = cont21 + 1}
    if(idade > 50){cont50 = cont50 + 1}
    if(idade == - 99)
    

    console.log(`Idade maior que 21 ${cont21}`)
    console.log(`Idade maior que 50 ${cont50}`);{
        break

    }

   
}
