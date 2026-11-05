import { useState } from "react";
import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";
import ExploreIcon from "@mui/icons-material/Explore";

export default function WeatherApp() {
  const [weatherInfo, setWeatherInfo] = useState({
    city: "Wonderland",
    country: "",
    feelsLike: 37.47,
    temp: 34.81,
    tempmax: 34.81,
    tempmin: 34.81,
    humidity: 42,
    weather: "clear sky",
    weatherMain: "Clear",
    windSpeed: 3.2,
    visibility: 10000,
    sunrise: null,
    sunset: null,
  });
  const [isLoading, setLoading] = useState(false);

  const updateInfo = (newInfo) => {
    setWeatherInfo(newInfo);
  };

  return (
    <main className="weather-app">
      <header className="app-header">
        <div className="brand"><ExploreIcon /><span>skyline</span></div>
        <p className="header-note">Weather, with a point of view</p>
      </header>
      <section className="hero-copy">
        <p className="eyebrow">THE DAILY OUTLOOK</p>
        <h1>See what the sky is <em>really</em> saying.</h1>
        <p>Look up a place and get the details that matter, without the noise.</p>
      </section>
      <SearchBox updateInfo={updateInfo} setLoading={setLoading} isLoading={isLoading} />
      <InfoBox info={weatherInfo} />
      <p className="footer-note">Weather data by OpenWeather</p>
    </main>
  );
}
