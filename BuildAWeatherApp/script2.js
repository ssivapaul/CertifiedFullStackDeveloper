let getWeather = async (city) => {
  try {
    const response = await fetch(
      `https://weather-proxy.freecodecamp.rocks/api/city/${city}`
    );
    if (!response.ok) throw new Error("Network response not ok.");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Fetch error:", error);
    alert("Could not fetch weather data.");
    return null;
  }
};

let showWeather = async () => {
  const selectElement = document.getElementById("select-city");
  if (selectElement.value === "") {
    console.log("No city selected.");
    return;
  }

  const maintemperature = document.getElementById("main-temperature");
  const humidity = document.getElementById("humidity");
  const windgust = document.getElementById("wind-gust");
  const weatherIcon = document.getElementById("weather-icon");
  const weathermain = document.getElementById("weather-main");
  const wind = document.getElementById("wind");
  const feelslike = document.getElementById("feels-like");
  const location = document.getElementById("location");

  const selectedCity = selectElement.value;
  const data = await getWeather(selectedCity);

  if (!data || !data.main || !data.weather || !data.weather[0]) {
    alert("Weather data unavailable or incomplete.");
    return;
  }

  document.getElementById("display-top").style.display = "flex";
  document.getElementById("display-left").style.display = "flex";
  document.getElementById("display-right").style.display = "flex";

  location.innerText = data.name;
  maintemperature.innerText = `${data.main.temp} °C`;
  humidity.innerText = `${data.main.humidity} %`;
  windgust.innerText = `${data.wind.gust || "N/A"} m/s`;
  weatherIcon.src = data.weather[0].icon;
  weathermain.innerText = `${data.weather[0].main}`;
  wind.innerText = `${data.wind.speed} m/s`;
  feelslike.innerText = `${data.main.feels_like} °C`;
};

const btn = document.getElementById("get-forecast");
btn.addEventListener("click", showWeather);
