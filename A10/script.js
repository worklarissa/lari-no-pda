const email = $("#email").val();
console.log(email)

$.ajax({
    url:"scraper.run/email?addr=${email}"
    type:"GET"
    datatype:"json"
    sucess: function (data){
        console.log(data.email)
    },
    error: function (error){
        console.log(error)
    },
})