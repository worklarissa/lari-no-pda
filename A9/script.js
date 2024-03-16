let usuario = {};

usuario.nome = prompt("Insira seu nome")

usuario.idade = parseInt(prompt("Insira sua Idade"))

usuario.disciplinas = prompt("Insira suas disciplinas cursadas, separando-as por virgula")

//console.log(usuario)
let seriAluno = JSON.stringify(usuario)
console.log(seriAluno)

let deseriAluno =  JSON.parse(seriAluno);
console.log(deseriAluno)