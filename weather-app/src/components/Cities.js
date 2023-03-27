import { useEffect, useState } from "react";
import { api } from "../constants/ApiConstants";
import axios from "axios";
import "../css/Cities.css";

export function Cities() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(undefined);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    console.log(city);
  }, [city]);

  function searchWeather() {
    console.log(city);
    setLoading(true);
    // fetch(`${api.base}/weather?q=${city}&units=metric&appid=${api.key}`)
    //   .then((res) => res.json())
    //   .then((res) => {
    //     console.log(res);
    //     if (res.cod !== "404") {
    //       setWeather(res);
    //     } else {
    //       setWeather(undefined);
    //       alert("Error, city not found");
    //     }
    //     setLoading(false);
    //     setCity("");
    //   })
    //   .catch((err) => {
    //     alert(err);
    //   });

    axios({
      url: `${api.base}/weather?q=${city}&units=metric&appid=${api.key}`,
      method: "GET",
    })
      .then((res) => {
        console.log(res);
        setWeather(res.data);
        setLoading(false);
        setCity("");
      })
      .catch((err) => {
        alert(err);
        setWeather(undefined);
        setLoading(false);
        setCity("");
      });
  }

  function dateBuilder(currentDate) {
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    let month = months[currentDate.getMonth()];
    let day = days[currentDate.getDay()];
    let date = currentDate.getDate();
    let year = currentDate.getFullYear();

    return `${day} ${date} ${month} ${year}`;
  }

  return (
    <div>
      <div className="search-box">
        <input
          type="text"
          placeholder="Search Cities"
          className="search-bar"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button onClick={searchWeather} className="search-button">
          Search
        </button>
      </div>
      {weather && loading === false && (
        <div className="location-container">
          <div className="location">
            {weather.name}, {weather.sys.country}
          </div>
          <div className="date">{dateBuilder(new Date())}</div>
          <div className="weather-box">
            <div className="temp"> {Math.round(weather.main.temp)}&#8451;</div>
            <div className="weather">{weather.weather[0].main}</div>
          </div>
        </div>
      )}
      {loading && <div className="loader">Loading ...</div>}
    </div>
  );
}
