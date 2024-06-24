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
    updateData();
}


function updateData(){
    var city = document.getElementsByClassName("city");
    city[0].innerHTML = data.name;
    var wind = document.getElementsByClassName("wind");
    wind[0].innerHTML = data.wind.speed;
    var humidity = document.getElementsByClassName("humidity");
    humidity[0].innerHTML = data.main.humidity;

}
