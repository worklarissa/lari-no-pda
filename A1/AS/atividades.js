// Faça uma desestruturação de um objeto
let aluno1 = {
    nome: 'João',
    idade: 20,
    curso: 'Engenharia'
  };

let nome = aluno1.nome
let idade = aluno1.idade
let curso = aluno1.curso
//  Resultados esperados
console.log(nome); // João
console.log(idade); // 20
console.log(curso); // Engenharia

// Faça uma desestruturação de um objeto atribuindo o valor 'Não informado' como padrão
let aluno2 = {
    nome: 'João',
    idade: 20
  };

let nome2 = aluno2.nome
let idade2 = aluno2.idade 
let curso2 = aluno2 || 'Não informado'
// Resultados esperados
console.log("\n"+nome); // João
console.log(idade); // 20
console.log(curso); // Não informado


// Faça uma desestruturação de um objeto aninhado
let aluno3 = {
    nome: 'João',
    idade: 20,
    curso: {
      nome: 'Engenharia',
      período: 6
    }
  };

let nome3 = aluno3.nome
let  idade3 = aluno3.idade
let cursoNome = aluno3.curso.nome
let periodo = aluno3.curso.período
// Resultados esperados
console.log("\n" + nome); // João
console.log(idade); // 20
console.log(cursoNome); // Engenharia
console.log(periodo); // 6

// Faça uma desestruturação de um objeto usando uma função
  let aluno4 = {
    nome: 'João',
    idade: 20,
    curso: 'Engenharia'
  };

function imprimeAluno(){

  let nome4 = aluno4.nome
  let idade4 = aluno4.idade
  let curso4 = aluno4.curso

  console.log(`\nNome: ${nome4}, Idade: ${idade4}, Curso: ${curso4}`)
}
//  Resultados esperados
imprimeAluno(aluno4); // Nome: João, Idade: 20, Curso: Engenharia

//  Faça uma desestruturação de um objeto usando rest parameters
let aluno5 = {
    nome: 'João',
    idade: 20,
    curso: 'Engenharia',
    universidade: 'USP'
};

const {nome:nome5, ...rest} = aluno5


// Resultados esperados
console.log("\n"+ nome5); // João
console.log(rest); // { idade: 20, curso: 'Engenharia', universidade: 'USP' }