function idade(){
    let aidade = parseInt(prompt("Digite a idade da árvore"))
    return aidade 

}

 idadeArvore = idade()

function validador(idadeArvore){
    if (aidade < 10){
        alert("Essa árvore ainda é uma criança")
    }else if(aidade >= 10 && aidade < 50 ){
        alert("Esta árvore está em sua fase adulta")
    }else if(aidade > 50){
        alert("Esta árvore é uma idosa sábia")
    }
}

idade()
validador()