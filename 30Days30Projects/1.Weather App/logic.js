const apiKey = "e18960a382c140757b3461966fa66582";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric"


var data ;
var query;

function searchweather(){
    var input = document.getElementById("queryx");
    console.log(input.value.toLowerCase());
    query = input.value.toLowerCase();
    input.value = "";

    checkWeather()

}


async function checkWeather(){
    const res = await fetch(apiUrl+`&appid=${apiKey}&q=${query}`);
    data = await res.json();

    console.log(data);

    var er = document.getElementById("error");

    if(res.status == 404){
       
        er.innerHTML = "*Invalid City"
        
    }
    else if(res.status == 400){
        
        er.innerHTML = "*Enter City"
         
        
    }else{
        er.innerHTML = ""
        updateData();
    }
    
}

function updateData(){
    var city = document.getElementsByClassName("city");
    city[0].innerHTML = data.name;
    var wind = document.getElementsByClassName("wind");
    wind[0].innerHTML = data.wind.speed+" km/h";
    var humidity = document.getElementsByClassName("humidity");
    humidity[0].innerHTML = data.main.humidity+" %";
    var temp = document.getElementsByClassName("temp");
    temp[0].innerHTML = data.main.temp+" °C";
    var icon = document.getElementsByClassName("weathericon");
    var w =data.weather[0].main;
    //console.log(w)
    icon[0].src = "images/"+data.weather[0].main.toLowerCase()+".png"
    
}


