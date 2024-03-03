function cadastroNoticias(nome, idade, email){
    // Pegando os valores dos inputs
    var nome = document.getElementById("name").value;
    var idade = document.getElementById("age").value;
    var email = document.getElementById("email").value;

    // Criando o objeto com as propriedades
    var objetoCadastro = {
        name: nome,
        age: idade,
        email: email
    };

    // Exibindo o objeto no console
    console.log(objetoCadastro);
}

cadastroNoticias(nome, idade, email)