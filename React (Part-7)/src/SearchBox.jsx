import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import "./SearchBox.css";

export default function SearchBox({ updateInfo, setLoading, isLoading }) {
  const [city, setCity] = useState("");
  const [error, setError] = useState("");

  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY =
    import.meta.env.VITE_OPENWEATHER_API_KEY || "5f34860ff07074d53608bd5def390f4b";

  const getWeatherInfo = async () => {
    const response = await fetch(
      `${API_URL}?q=${encodeURIComponent(city.trim())}&appid=${API_KEY}&units=metric`,
    );

    if (!response.ok) {
      throw new Error(response.status === 404 ? "We couldn't find that city." : "Weather service is unavailable.");
    }

    const jsonResponse = await response.json();

    return {
      city: jsonResponse.name,
      country: jsonResponse.sys.country,
      temp: jsonResponse.main.temp,
      tempmin: jsonResponse.main.temp_min,
      tempmax: jsonResponse.main.temp_max,
      humidity: jsonResponse.main.humidity,
      feelsLike: jsonResponse.main.feels_like,
      weather: jsonResponse.weather[0].description,
      weatherMain: jsonResponse.weather[0].main,
      icon: jsonResponse.weather[0].icon,
      windSpeed: jsonResponse.wind.speed,
      visibility: jsonResponse.visibility,
      sunrise: jsonResponse.sys.sunrise,
      sunset: jsonResponse.sys.sunset,
    };
  };

  const handleChange = (e) => {
    setCity(e.target.value);
    if (error) setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const trimmedCity = city.trim();

    if (!trimmedCity || isLoading) return;

    setLoading(true);
    setError("");

    try {
      const newInfo = await getWeatherInfo();
      updateInfo(newInfo);
      setCity("");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="search-box">
      <form onSubmit={handleSubmit}>
        <label htmlFor="city">Search city</label>
        <div className="search-control">
          <SearchIcon className="search-control__icon" aria-hidden="true" />
          <input
            id="city"
            type="search"
            placeholder="Try London, Tokyo or New York"
            value={city}
            onChange={handleChange}
            autoComplete="off"
          />
          <button type="submit" disabled={isLoading || !city.trim()}>
            {isLoading ? "Finding..." : "Search"}
            {isLoading ? null : <ArrowForwardIcon fontSize="small" />}
          </button>
        </div>
        {error && <p className="search-box__error" role="alert">{error}</p>}
      </form>
    </div>
  );
}
