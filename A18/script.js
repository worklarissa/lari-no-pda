texto = "Meu Nome É Larissa"
textoMaiusculo = texto.toUpperCase()
console.log(textoMaiusculo);

textoMinusculo = texto.toLowerCase()
console.log(textoMinusculo);

textoSubstituido = texto.replace("Larissa", "Rafaela")
console.log(textoSubstituido)

textoCortado = texto.slice(11, 18)
console.log(textoCortado)

document.write("<h2>" + textoMaiusculo + "</h2>")
document.write("<h2>" + textoMinusculo + "</h2>")
document.write("<h2>" + textoSubstituido + "</h2>")
document.write("<h2>" + textoCortado + "</h2>")
