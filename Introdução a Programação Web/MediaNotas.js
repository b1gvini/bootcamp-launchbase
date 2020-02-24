// Criar um programa que calcula a média
// das notas entre os alunos e envia
// mensagem do cálculo da média
//Se a média for maior que 5, parabenizar a nota..

const aluno1 = 'Vinícius'
const notaAluno1 = 9.5

const aluno2 = 'Nanda'
const notaAluno2 = 10

const aluno3 = 'Davs'
const notaAluno3 = 9

const media = (notaAluno1 + notaAluno2 + notaAluno3) / 3
if(media >5){
    console.log(`Parabéns, sua média foi ${media}!!`)
}else{
    console.log('A média foi menor que 5 :(')
}
