numeroSecreto  = 56
chute = parseInt( prompt("Digite qual número você acha que é"))
acertou = false


if (chute == numeroSecreto){
    console.log ("Acertou");
}
if (numeroSecreto > chute) {
    console.log("O número secreto é maior! Tente novamente.")
}
if (numeroSecreto < chute) {
    console.log("O número é menor! Tente novamente")
}
