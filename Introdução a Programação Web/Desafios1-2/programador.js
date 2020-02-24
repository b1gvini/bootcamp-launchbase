const pessoa = {
    nome: "Vinícius",
    idade: 24,
    tecnologias: [
        { nome: 'Python', especialidade: 'Data Science' },
        { nome: 'C++', especialidade: 'Desktop' },
        { nome: 'JavaScript', especialidade: 'Web/Mobile' }
    ]
}

console.log(`O usuário ${pessoa.nome} tem ${pessoa.idade} anos e usa a tecnologia ${pessoa.tecnologias[0].nome} com especialidade em ${pessoa.tecnologias[0].especialidade}.`)
