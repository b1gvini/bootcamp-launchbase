// Crie um programa para calcular o IMC e nível de obesidade de uma pessoa.
const nome = "Vinícius"
const altura = 1.77
const peso = 96.5

const IMC = peso / (altura*altura)

if(IMC >=30){
    console.log(`${nome} você está acima do peso`)
}else{
    console.log(`${nome} você não está acima do peso`)
}