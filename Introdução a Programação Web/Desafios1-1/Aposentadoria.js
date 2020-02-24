// Crie um programa para calcular a aposentadoria de uma pessoa.
// Obs.: Esse cálculo é fictício.

const nome = "Vinícius"
const sexo = "M"
const idade = 24
const contribuicao = 4

const somaTotal = contribuicao + idade

if(sexo =="M" && contribuicao > 35 && somaTotal>95 ){
    console.log(`${nome}, você pode se aposentar.`)
}else if(sexo =="F" && contribuicao > 30 && somaTotal>85){
    console.log(`${nome}, você pode se aposentar.`)
}else{
    console.log(`${nome}, você não pode se aposentar.`)
}