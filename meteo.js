// Initialize the icons for the weather condition
const weatherIcons = {
    "Rain": "wi wi-day-rain",
    "Clouds": "wi wi-day-cloudy",
    "Clear": "wi wi-day-sunny",
    "Snow": "wi wi-day-snow",
    "Mist": "wi wi-day-fog",
    "Drizzle": "wi wi-day-sleet",
    }

    // Call the getJSON function and return an object in a variable that will contain the information contained in the conf.json file
$.getJSON("conf.json", function(conf) {
    console.log(conf.city);
    // Initialize a URL variable that concatenates a character string with the city, the language, the units and the API_KEY
    let url = "https://api.openweathermap.org/data/2.5/weather?q="+conf.city+"&lang=fr&units=metric&appid="+conf.API_KEY;
    console.log(url);
    fetch(url)
    // Returns the weather info in a JSON object
    // Transform this JSON object into a readable array
    .then((res) =>{
        return res.json();
    })
    // Send this array into the function
    .then((data) =>{
        display_weather(data);
    });
});

    // Retrieve the information in order to display it with the HTML file
function display_weather(data){

    const conditions = data.weather[0].main;

    document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.humidity').innerHTML = data.main.humidity + "%";
    document.querySelector('.wind').innerHTML = data.wind.speed + " km/h";
    document.querySelector('i.wi').className = weatherIcons[conditions];
}