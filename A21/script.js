let nomes = []


for (let i = 0 ;i < 5; i++) {
    let adiciona = prompt("Digite um nome africano")
        nomes.push(adiciona)
        console.log(nomes)
    }

    for (let i = 0; i < nomes.length; i++) {
        console.log(`Nome ${i + 1}: ${nomes[i]}`)
    }