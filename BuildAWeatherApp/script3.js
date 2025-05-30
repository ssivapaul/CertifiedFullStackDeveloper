const containertop = document.getElementById("display-top");
const containerleft = document.getElementById("display-left");
const containerright = document.getElementById("display-right");
const button = document.getElementById("get-forecast");

let showWeather = async () => {
  const selectElement = document.getElementById("select-city");
  const maintemperature = document.getElementById("main-temperature");
  const humidity = document.getElementById("humidity");
  const windgust = document.getElementById("wind-gust");
  const weatherIcon = document.getElementById("weather-icon");
  const weathermain = document.getElementById("weather-main");
  const wind = document.getElementById("wind");
  const feelslike = document.getElementById("feels-like");
  const location = document.getElementById("location");

  if (selectElement.value !== "") {
    containertop.style.display = "flex";
    containerright.style.display = "flex";
    containerleft.style.display = "flex";
    const selectedOption = selectElement.options[selectElement.selectedIndex];
    let data = await getWeather(selectedOption.value);
    console.log(data);
    location.innerText = `${data.name}`;
    maintemperature.innerText = `${data.main.temp} Deg.C`;
    humidity.innerText = `${data.main.humidity} %`;
    windgust.innerText = `${data.wind.gust || "N/A"} m/s`;
    weatherIcon.src = data.weather[0].icon;
    weathermain.innerText = `${data.weather[0].main} Weather`;
    wind.innerText = `${data.wind.speed} m/s`;
    feelslike.innerText = `${data.main.feels_like} Deg.C`;
  } else {
    containertop.style.display = "none";
    containerright.style.display = "none";
    containerleft.style.display = "none";
    console.log("No option is selected.");
  }
};

let getWeather = async (city) => {
  try {
    const response = await fetch(
      `https://weather-proxy.freecodecamp.rocks/api/current?city=${city}`
    );
    if (!response.ok) {
      alert("Something went wrong, please try again later.");
      return null;
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    alert("Error fetching weather data.");
    return null;
  }
};

const btn = document.getElementById("get-forecast");
btn.addEventListener("click", showWeather);
