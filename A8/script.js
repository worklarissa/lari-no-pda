
//Chamando o botão
const botaoAdicionar = document.querySelector('#valida-nome')
//função para que ao apertar o botão chame a api
function chamarApi(nme){
    //Armazenar nome digitado no input
    var nme = document.getElementById("name").value;


    //Aplicar o método XMLHttpRequest na variavel, para buscar a api
    let xhr = new XMLHttpRequest();
    xhr.onload = function() {
        if (xhr.status === 200) {
            var reponse = JSON.parse(xhr.responseText); //converte a resposta da api que esté em json para um objeto 
            //para facilitar a manipulação de dados
            document.getElementById("resultado").innerHTML = `Nome: ${response.name},
            Idade: ${response.age} anos` ;
            console.log(xhr);
        }
    };
    
    xhr.open("GET", `https://api.agify.io?name=${nme}`);
    
    xhr.send();


}

//Adicionar evento de clique ao botão
document.querySelector('#valida-nome').addEventListener("click", chamarApi);