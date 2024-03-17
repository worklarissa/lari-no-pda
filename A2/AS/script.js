function buscarDadosDoUsuario() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                nome: "João",
                idade: 30,
                profissao: "Desenvolvedor"
            });
        }, 2000);
    });
}

async function iniciar() {
    try {
        const usuario = await buscarDadosDoUsuario();
        document.getElementById('dadosUsuario').innerHTML = `Nome: ${usuario.nome}, Idade: ${usuario.idade}, Profissão: ${usuario.profissao}`;
    } catch (erro) {
        console.error("Erro ao buscar dados do usuário:", erro);
    }
}

// Chama a função iniciar

