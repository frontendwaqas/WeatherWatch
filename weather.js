"use strict";
const apiKey = "765df050d7d03c4a77fa5977bf7743ac";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
let search_input = document.querySelector(".search-input");
let search_btn = document.querySelector(".search-btn");
let weather_icon = document.querySelector(".weather-icon");

async function checkWeather(cityInput) {
  const response = await fetch(apiUrl + cityInput + `&appid=${apiKey}`);
  if (response.status == 404) {
    alert("Wrong City Name...");
    document.querySelector(".weather").style.display = "none";
  } else {
    var data = await response.json();
    console.log(data);
    document.querySelector(".humidity").innerHTML =
      Math.round(data.main.humidity) + " %";
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".wind").innerHTML =
      Math.round(data.wind.speed) + " km/h";
    document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp) + "°C";
    let changeImg = data.weather[0].main;
    if (changeImg == "Clouds") {
      weather_icon.src = "/clouds.png";
    } else if (changeImg == "Rain") {
      weather_icon.src = "/rain.png";
    } else if (changeImg == "Clear") {
      weather_icon.src = "/clear.png";
    } else if (changeImg == "snow") {
      weather_icon.src = "/snow.png";
    } else if (changeImg == "Drizzle") {
      weather_icon.src = "/drizzle.png";
    } else if (changeImg == "Mist") {
      weather_icon.src = "/mist.png";
    }
    document.querySelector(".weather").style.display = "block";
  }
}

checkWeather();
search_btn.addEventListener("click", () => {
  checkWeather(search_input.value);
});
