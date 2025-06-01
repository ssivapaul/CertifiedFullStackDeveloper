let showWeather = async () => {
  const selectElement = document.getElementById("select");
  const selectedOption = selectElement.options[selectElement.selectedIndex];

  if (selectElement.value != "") {
    try {
      let data = await getWeather(selectedOption.value);
      if (!data) {
        throw new Error("Thrown at showWeather(): ");
        return null;
      }

      document.getElementById("display-top").style.display = "flex";
      document.getElementById("location").style.display = "block";

      document.getElementById("location").innerText =
        data.name === undefined || data.name === null ? "N/A" : data.name;
      //document.getElementById("location").innerText = `${data.name ?? "N/A"}`;
      document.getElementById("main-temperature").innerText =
        data.main.temp === undefined || data.main.temp === null
          ? "N/A"
          : `${data.main.temp}\u00B0 C`;
      //document.getElementById("main-temperature").innerText = `${data.main.temp || "N/A"}\u00B0 C`;
      document.getElementById("humidity").innerText = `Humidity: ${
        data.main.humidity || "N/A"
      }%`;
      document.getElementById("wind-gust").innerText = data.wind.gust
        ? `Gusts: ${data.wind.gust} m/s`
        : `Gusts: N/A`;

      document.getElementById("weather-icon").src =
        data.weather?.[0]?.icon ?? "";
      document.getElementById("weather-icon").alt =
        data.weather[0]?.description || "";
      document.getElementById("weather-main").innerText = `${
        data.weather[0].main || "N/A"
      }`;
      document.getElementById(
        "wind"
      ).innerText = `Wind: ${data.wind.speed} m/s`;
      document.getElementById("feels-like").innerText = `Feels Like: ${
        data.main.feels_like || "N/A"
      } \u00B0 C`;
    } catch (error) {
      console.error(error);
    }
  } else {
    document.getElementById("display-top").style.display = "none";
    document.getElementById("location").style.display = "NONE";
  }
};

let getWeather = async (city) => {
  try {
    const response = await fetch(
      `https://weather-proxy.freecodecamp.rocks/api/city/${encodeURIComponent(
        city
      )}`
    );
    if (!response.ok) {
      alert("Something went wrong, please try again later");
      return null;
    }
    return await response.json();
  } catch (error) {
    console.error(error);
    return null;
  }
};

const btn = document.getElementById("get-forecast");
btn.addEventListener("click", showWeather);
