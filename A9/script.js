numeroSecreto  = 56
chute = 30
acertou = false


if (chute == numeroSecreto){
    acertou = true
    console.log ("Acertou");
}
if (numeroSecreto > chute) {
    console.log("O número secreto é maior")
}
if (numeroSecreto < chute) {
    console.log("O número é menor")
}
