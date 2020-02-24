const usuarios = [
    { nome: "Vinicius", tecnologias: ["HTML", "CSS"] },
    { nome: "Nanda", tecnologias: ["JavaScript", "CSS"] },
    { nome: "Davs", tecnologias: ["HTML", "Node.js"] }
  ];

  for (let i = 0; i < usuarios.length; i++){
      console.log(`${usuarios[i].nome} trabalha com ${usuarios[i].tecnologias.join(', ')}.`)
  }