// Ahmed Raza 
function getWeatherData(){
    var city = document.getElementById("location").value;   
    axios.get('http://api.weatherapi.com/v1/current.json?key=212cba20af5047c398051557222408&q='+city)
    .then(function (response) {
        console.log(response.data);
        document.getElementById("temp_c").innerText = response.data.current.temp_c + "° C";
        document.getElementById("fahrenheit").innerText = response.data.current.temp_f + "fahrenheit ° F";
        document.getElementById("humidity").innerText = response.data.current.humidity + "Humidity ° ";
        document.getElementById("feelslike_c").innerText = response.data.current.feelslike_c + "Feelslike ° C ";
        document.getElementById("vis_km").innerText = response.data.current.vis_km + "Visibility KM ";
        document.getElementById("wind_kph").innerText = response.data.current.wind_kph + "Wind Kph";

        wind_kph
    })
}
