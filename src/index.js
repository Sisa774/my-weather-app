//feature 1
function currentTime() {
  let now = new Date();

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  let day = days[now.getDay()];

  let hours = [now.getHours()];
  let minutes = [now.getMinutes()];

  let currentDate = document.querySelector(".date");
  currentDate.innerHTML = `${day} ${hours}:${minutes}`;
}
currentTime();

//week 5
function displayWeather(response) {
  document.querySelector("h1").innerHTML = response.data.name;
  document.querySelector(".weather").innerHTML = Math.round(
    response.data.main.temp
  );
}

function searchCity(city) {
  event.preventDefault();
  let newCity = document.querySelector(".search-column").value;
  let apiKey = "53f3bc1f5d348c44be3e3754c7185573";
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${newCity}&appid=${apiKey}&units=metric`;
  axios.get(url).then(displayWeather);
}

let form = document.querySelector("#search-button");
form.addEventListener("submit", searchCity);

//Bonus
function getLocation(position) {
  let apiKey = "53f3bc1f5d348c44be3e3754c7185573";
  let longitude = position.coords.longitude;
  let latitude = position.coords.latitude;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayWeather);
}

function getCurrentLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(getLocation);
}

let currentLocationButton = document.querySelector("#current-location");
currentLocationButton.addEventListener("click", getCurrentLocation);

//week 2
//Bonus feature
function changeToFarenheit(event) {
  event.preventDefault();
  let changeCelcius = document.querySelector(".weather");
  changeCelcius.innerHTML = 80;
}

let farenheit = document.querySelector("#farenheit");
farenheit.addEventListener("click", changeToFarenheit);

function changeToCelcius(event) {
  event.preventDefault();
  let changeFarenheit = document.querySelector(".weather");
  changeFarenheit.innerHTML = 23;
}
let celcius = document.querySelector("#celcius");
celcius.addEventListener("click", changeToCelcius);
