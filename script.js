const options = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "YOUR_API_KEY",
    "x-rapidapi-host": "open-weather13.p.rapidapi.com"
  }
};


// MAIN WEATHER CARD
const getWeather = async (city) => {
  try {

    document.getElementById("cityName").innerHTML = city;

    const url = `https://open-weather13.p.rapidapi.com/city?city=${city}`;

    const response = await fetch(url, options);
    const data = await response.json();

    if (!data || !data.main) {
      console.log("API error:", data);
      return;
    }

    document.getElementById("temp").innerHTML = data.main.temp;
    document.getElementById("temp2").innerHTML = data.main.temp;

    document.getElementById("temp_min").innerHTML = data.main.temp_min;
    document.getElementById("temp_max").innerHTML = data.main.temp_max;

    document.getElementById("feels_like").innerHTML = data.main.feels_like;

    document.getElementById("pressure").innerHTML = data.main.pressure;

    document.getElementById("humidity").innerHTML = data.main.humidity;
    document.getElementById("humidity2").innerHTML = data.main.humidity;

    document.getElementById("sea_level").innerHTML = data.main.sea_level ?? "-";
    document.getElementById("sea_level2").innerHTML = data.main.sea_level ?? "-";

    document.getElementById("grnd_level").innerHTML = data.main.grnd_level ?? "-";
    document.getElementById("temp_kf").innerHTML = data.main.temp_kf ?? "-";

  } catch (error) {
    console.error(error);
  }
};



// TABLE WEATHER FUNCTION
const getWeatherForCity = async (city, prefix) => {

  try {

    const url = `https://open-weather13.p.rapidapi.com/city?city=${city}`;

    const response = await fetch(url, options);
    const data = await response.json();

    if (!data || !data.main) {
      console.log("API error:", city);
      return;
    }

    document.getElementById(prefix+"_temp").innerHTML = data.main.temp;
    document.getElementById(prefix+"_feels").innerHTML = data.main.feels_like;

    document.getElementById(prefix+"_temp_min").innerHTML = data.main.temp_min;
    document.getElementById(prefix+"_temp_max").innerHTML = data.main.temp_max;

    document.getElementById(prefix+"_pressure").innerHTML = data.main.pressure;

    document.getElementById(prefix+"_sea").innerHTML = data.main.sea_level ?? "-";
    document.getElementById(prefix+"_grnd").innerHTML = data.main.grnd_level ?? "-";

    document.getElementById(prefix+"_humidity").innerHTML = data.main.humidity;

    document.getElementById(prefix+"_temp_kf").innerHTML = data.main.temp_kf ?? "-";

  } catch (error) {
    console.error(error);
  }
};



// SEARCH BUTTON
submit.addEventListener("click", (e) => {
  e.preventDefault();
  getWeather(city.value);
});



// DEFAULT CITY
getWeather("Delhi");



// LOAD TABLE DATA WITH DELAY (avoid 429 error)
setTimeout(()=>getWeatherForCity("Shanghai","sh"),1000);
setTimeout(()=>getWeatherForCity("Boston","bo"),2000);
setTimeout(()=>getWeatherForCity("Lucknow","lu"),3000);
setTimeout(()=>getWeatherForCity("Kolkata","ko"),4000);