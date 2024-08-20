function changeWeather(response) {
  let tempElement = document.querySelector('#temp');
  let temperature = response.data.temperature.current;
  let cityElement = document.querySelector('#city-name');
  cityElement.innerHTML = response.data.city;
  tempElement.innerHTML = Math.round(temperature);
}

function searchCity(city) {
  let apiKey = 'o1214355d46e610e0665f9f2cae5tadb';
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(changeWeather);
}

function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector('#search-input');

  searchCity(searchInput.value);
}
let searchFormElement = document.querySelector('#search-form');
searchFormElement.addEventListener('submit', handleSearchSubmit);

searchCity('Kabul');
