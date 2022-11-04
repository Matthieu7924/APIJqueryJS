let callBackGetSuccess = function(data){
    console.log("donnees- api", data)
    // alert("Meteo temp: " + data.main.temp);
    let element = document.getElementById("zone_meteo");
    let ville=document.getElementById("queryLoc").value.toUpperCase();
    element.innerHTML = "La température de "+ville+ " est de " + data.main.temp;
}





function buttonClickGET(){
    let ville=document.getElementById("queryLoc").value;
    let url="https://api.openweathermap.org/data/2.5/weather?q="+ville+"&appid=c21a75b667d6f7abb81f118dcf8d4611&units=metric"


    $.get(url,callBackGetSuccess).done(function(){

    })
    .fail(function(){
        alert("error");
    })
    .always(function(){

    });


}