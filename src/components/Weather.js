import React, { useState, useEffect } from "react";

const Weather = ({ lat, lon }) => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      if (lat && lon) {
        const apiKey = "e928a468070f01b093d768f59895f8a7";
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
        try {
          const response = await fetch(url);
          const data = await response.json();
          setWeather(data);
        } catch (error) {
          console.error("Failed to fetch weather data:", error);
        }
      }
    };
    fetchWeather();
  }, [lat, lon]);

  if (!weather) {
    return <div>正在載入天氣資訊...</div>;
  }

  return (
    <div className="weather">
      <h3>當前天氣</h3>
      <p>溫度：{weather.main.temp}°C</p>
      <p>天氣狀況：{weather.weather[0].description}</p>
      <p>風速：{weather.wind.speed} m/s</p>
    </div>
  );
};

export default Weather;