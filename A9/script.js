let usuario = {};

usuario.nome = prompt("Insira seu nome")

usuario.idade = prompt("Insira sua Idade")

usuario.disciplinas = prompt("Insida suas disciplinas cursadas, separando-as por virgula")

//console.log(usuario)
JSON.stringify(usuario)
console.log(typeof JSON.stringify(usuario))
