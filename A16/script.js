function validaIdade(){
    let idade = parseInt(prompt("Digite a idade da árvore"))

    if (idade < 10){
        alert("Essa árvore ainda é uma criança")
    }else if(idade >= 10 && idade < 50 ){
        alert("Esta árvore está em sua fase adulta")
    }else if(idade > 50){
        alert("Esta árvore é uma idosa sábia")
    }

}

validaIdade()