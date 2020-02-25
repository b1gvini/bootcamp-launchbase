const usuarios = [
    { nome: "Vinicius", tecnologias: ["HTML", "CSS"] },
    { nome: "Nanda", tecnologias: ["JavaScript", "CSS"] },
    { nome: "Davs", tecnologias: ["HTML", "Node.js"] }
];

function checaSeUsuarioUsaCSS(usuario) {
    for (let tecnologia of usuario.tecnologias){
        if(tecnologia == "CSS") return true
    }
    return false
}

for (let i = 0; i<usuarios.length; i++){
    var usuarioCSS = checaSeUsuarioUsaCSS(usuarios[i])
    if (usuarioCSS){
        console.log(`O usuário ${usuarios[i].nome} trabalha com CSS`)
    }
}