function displayWeatherCondition(response) {
  document.querySelector("#city").innerHTML = response.data.name;
  document.querySelector(
    "#mesto"
  ).innerHTML = `Search results for: ${response.data.name}`;
  let currentTemperature = Math.round(response.data.main.temp);
  document.querySelector("#temperature").innerHTML = `${currentTemperature} °C`;
}

function search(event) {
  event.preventDefault();
  let apiKey = "30576d24fe7c955bdd206c12086c3d03";
  let city = document.querySelector("#city-input").value;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayWeatherCondition);
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);
