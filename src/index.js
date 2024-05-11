function refreshWeather(respond) {
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = respond.data.temperature.current;
}

function searchCity(city) {
  let apiKey = "4o0269f4b7t3d5f7f0cfc4a0af394b27";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(refreshWeather);
}

function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-form-input");
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = searchInput.value;
  searchCity(searchInput.value);
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);
