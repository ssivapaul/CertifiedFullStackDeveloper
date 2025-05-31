const containertop = document.getElementById("display-top");
const containerleft = document.getElementById("display-left");
const containerright = document.getElementById("display-right");

let showWeather = async () => {
  const selectElement = document.getElementById("select-city");
  const selectedOption = selectElement.options[selectElement.selectedIndex];
  if (selectElement.value !== "") {
    containertop.style.display = "flex";
    containerright.style.display = "flex";
    containerleft.style.display = "flex";
    weather.style.display = "flex";
    wind.style.display = "flex";
    location.style.display = "block";

    try {
      let data = await getWeather(selectedOption.value);
      if (!data || !data.main) {
        throw new Error("Invalid data");
      }
      const weather = document.getElementById("weather");
      const wind = document.getElementById("wind");
      const maintemperature = document.getElementById("main-temperature");
      const humidity = document.getElementById("humidity");
      const windgust = document.getElementById("wind-gust");
      const weathericon = document.getElementById("weather-icon");
      const weathermain = document.getElementById("weather-main");
      const windspeed = document.getElementById("wind-speed");
      const feelslike = document.getElementById("feels-like");
      const location = document.getElementById("location");

      location.innerText = `${data.name ?? "N/A"}`;
      maintemperature.innerText = `Temp: ${data.main.temp ?? "N/A"} Deg.C`;
      humidity.innerText = `Humidity: ${data.main.humidity ?? "N/A"} %`;
      windgust.innerText = `Wind-Gust: ${data.wind.gust ?? "N/A"} m/s`;
      weathericon.src = data.weather[0]?.icon
        ? `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
        : "";
      weathericon.alt = data.weather[0]?.description ?? "";
      weathermain.innerText = `Weather: ${data.weather[0].main ?? "N/A"}`;
      windspeed.innerText = `Wind speed: ${data.wind.speed ?? "N/A"} m/s`;
      feelslike.innerText = `Feels like: ${
        data.main.feels_like ?? "N/A"
      } Deg.C`;
    } catch (error) {
      console.error(error);
      if (selectedCity === "Paris") {
        alert("Something went wrong, please try again later.");
      }
    }
  } else {
    containertop.style.display = "none";
    containerright.style.display = "none";
    containerleft.style.display = "none";
    location.style.display = "none";
  }
};

let getWeather = async (city) => {
  try {
    const response = await fetch(
      `https://weather-proxy.freecodecamp.rocks/api/city/${city}`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return await response.json();
  } catch (error) {
    console.error("Fetch error: ", error);
    throw error; // rethrow to be caught in showWeather
  }
};

const btn = document.getElementById("get-forecast");
btn.addEventListener("click", showWeather);
