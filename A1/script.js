function calcularNota(){
    let nota1 = parseFloat(prompt("Insira a nota da primeira prova"))
    let nota2 = parseFloat(prompt("Insira a nota da segunda prova"))
    let nota3 = parseFloat(prompt("Insira a nota da recuperação"))

    const media = (nota1 + nota2 + nota3) / 3
    if (media < 5){
        alert("Você ficou abaixo da média, melhore no próximo bimestre")
    }else if(media > 5 && media < 7){
        alert("Você está na média, mas ainda não é o ideal, procure melhorar")
    }else if(media > 7 && media < 10){
        alert("Suas notas estão muito boas!")
    }else{
        alert("Uau! Isso que é nota em!!")
    }
}
