import { useState } from "react";
import { api } from "../constants/ApiConstants";
import "../css/Weather.css";

export function Weather() {
  const [weather, setWeather] = useState(undefined);

  function getWeatherInfo(selectedCity) {
    console.log(selectedCity);
    fetch(
      `${api.base}/forecast?q=${selectedCity}&units=metric&appid=${api.key}`
    )
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then((res) => {
        console.log(res);
        setWeather(res);
      })
      .catch((err) => {
        alert(err);
      });
  }

  return (
    <div className="local-weather">
      <div className="header_buttons">
        <button onClick={() => getWeatherInfo("Skopje")} className="cityButton">
          Skopje
        </button>
        <button onClick={() => getWeatherInfo("Tetovo")} className="cityButton">
          Tetovo
        </button>
        <button onClick={() => getWeatherInfo("Veles")} className="cityButton">
          Veles
        </button>
        <button
          onClick={() => getWeatherInfo("Radovish")}
          className="cityButton"
        >
          Radovish
        </button>
        <button
          onClick={() => getWeatherInfo("Strumica")}
          className="cityButton"
        >
          Strumica
        </button>
        <button onClick={() => getWeatherInfo("Ohrid")} className="cityButton">
          Ohrid
        </button>
        <button
          onClick={() => getWeatherInfo("Mavrovo")}
          className="cityButton"
        >
          Mavrovo
        </button>
      </div>
      <div className="local-container">
        {weather &&
          weather.list.map((weatherList, i) => {
            return (
              <div key={i} className="card">
                <div className="location-box">
                  <div className="location">
                    {weather.city.name}, {weather.city.country}
                  </div>
                  <div className="date">{weatherList.dt_txt}</div>
                </div>
                <div className="weather-box">
                  <div className="temp">
                    {Math.round(weatherList.main.temp)}&#8451;
                  </div>
                  <div className="weather">{weatherList.weather[0].main}</div>
                </div>
                <hr />
              </div>
            );
          })}
      </div>
    </div>
  );
}

// PAUZA do 20:43
