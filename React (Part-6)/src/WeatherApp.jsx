import { useState } from "react";
import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";

export default function WeatherApp() {
  let [weatherInfo, setWeatherInfo] = useState({
    city: "Wonderland",
    feelsLike: 37.47,
    temp: 34.81,
    tempmax: 34.81,
    tempmin: 34.81,
    humidity: 42,
    weather: "clear sky",
  });

  const updateInfo = (newInfo) => {
    setWeatherInfo(newInfo);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>
        Weather app by <i>Priyanshu-Raj</i>
      </h1>
      <SearchBox updateInfo={updateInfo} />
      <InfoBox info={weatherInfo} />
    </div>
  );
}
