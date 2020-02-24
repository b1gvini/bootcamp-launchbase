//Crie um programa que armazena dados da empresa Rocketseat dentro de um objeto chamado empresa.
// Os dados a serem armazenados são:
//Nome: Rocketseat
//Cor: Roxo
//Foco: Programação
//Endereço:
//Rua: Rua Guilherme Gembala
//Número: 260

const usuario = {
    nome: "Vinícius",
    empresa: {
        Nome: "Rocketseat",
        Cor: "Roxo",
        Foco: "Programação",
        Endereco: {
            rua: "Rua guilherme Gembala",
            numero: 260
        }
    }
}
console.log(`${usuario.nome}, sua empresa ${usuario.empresa.Nome} está localizada na ${usuario.empresa.Endereco.rua}, número ${usuario.empresa.Endereco.numero}.`)