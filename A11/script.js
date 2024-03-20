$(document).ready(function () {
    $("#verifyEmail").click(function () {
        const yourEmail = $("#email").val();

try{
    $.ajax({
        url: `https://scraper.run/email?addr=${yourEmail}`,
        type: "GET",
        dataType: "json",
        beforeSend: function(){
            $("#resultados").html("Carregando...");
        },
        success: function (data){
            $("#resultados").html("<span>O email é real</span>")
            console.log(data.email)
        }});
}
catch(erro){ /*error: function (xhr, status, error)*/
    $("#resultados").html("<span>O email é falso</span>")
    console.log(xhr.responseText)
}