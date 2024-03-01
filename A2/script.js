palavras = ["Mirela", "Isaac", "Rafael", "Isabela", "Bruna", "Lucas"]
 
 const exibirNomes = function (palavras) {
    palavras.sort()
    console.log(palavras)
 }

 
 
function outrosNomes(exibirNomes) {
    nomesFemininos = ["Maria", "Ana", "Júlia", "Alice", "Isabella", "Sophia", "Laura", "Manuela"]
    exibirNomes(nomesFemininos)
}

exibirNomes(palavras)
outrosNomes(exibirNomes)
 
 