const lista = document.querySelector('#tarefa')
const botaoAdicionar = document.querySelector('#criar-tarefa')

function adicionarTarefa() {
    //pedir para o usuário inserir uma tarefa
    let texto = prompt('Digite a tarefa: ')
    //utilizar um innerHtml para adicionar a tarefa a lista
    lista.innerHTML += `<li>${texto}</li>`   
}

botaoAdicionar.addEventListener("click", adicionarTarefa)