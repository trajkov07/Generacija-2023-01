import { useState } from "react";
import { api } from "../constants/ApiConstants";

export function Weather() {
  const [weather, setWeather] = useState();

  function getWeatherInfo(selectedCity) {
    console.log(selectedCity);
    fetch(
      `${api.base}/forecast?q=${selectedCity}&units=metric&appid=${api.key}`
    )
      .then((res) => res.json())
      .then((res) => setWeather(res))
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
    </div>
  );
}
