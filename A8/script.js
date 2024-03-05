
//Chamando o botão
const botaoAdicionar = document.querySelector('#valida-nome')
//função para que ao apertar o botão chame a api
function chamarApi(nme){
    //Armazenar nome digitado no input
    var nme = document.getElementById("name").value

    let xhr = new XMLHttpRequest();
    xhr.onload = function() {
        if (xhr.status === 200) {
            console.log(xhr);
        }
    };
    
    xhr.open("GET", `https://api.agify.io?name=${nme}`);
    
    xhr.send();
}


//Aplicar o método XMLHttpRequest na variavel, para buscar a api
//Intanciar método
//Definir uma função que será chamada quando a resposta chegar
//abrir uma conexão com a API
//esperar pela resposta

botaoAdicionar.addEventListener("click", chamarApi)