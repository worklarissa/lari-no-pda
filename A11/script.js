temperatura = parseFloat( prompt("Digite a Temperatura do paciente"))



if ( temperatura >= 37.5){
    console.log ("O paciente está com covid");
}
else if ( temperatura >= 37 && temperatura <= 37.5 ) {
    console.log("O paciente está com suspeita")
}
if (temperatura < 37) {
    console.log("O paciente não está com covid")
}
