import LocationOnIcon from "@mui/icons-material/LocationOn";
import WbTwilightIcon from "@mui/icons-material/WbTwilight";
import WeatherDetails from "./WeatherDetails";
import WeatherIcon from "./WeatherIcon";
import "./InfoBox.css";

export default function InfoBox({ info }) {
  return (
    <div className="info-box">
      <div className="weather-card">
        <div className="weather-card__topline">
          <span className="eyebrow">CURRENT WEATHER</span>
          <span className="live-dot">Live</span>
        </div>
        <div className="location">
          <LocationOnIcon fontSize="small" />
          <h2>{info.city}{info.country ? `, ${info.country}` : ""}</h2>
        </div>
        <div className="weather-card__main">
          <div>
            <p className="temperature">{Math.round(info.temp)}<sup>°C</sup></p>
            <p className="condition">{info.weather}</p>
            <p className="range">H {Math.round(info.tempmax)}° &nbsp; L {Math.round(info.tempmin)}°</p>
          </div>
          <WeatherIcon weatherMain={info.weatherMain} large />
        </div>
        <WeatherDetails info={info} />
        <div className="sun-row">
          <span><WbTwilightIcon /> Sunrise <strong>{formatTime(info.sunrise)}</strong></span>
          <span><WbTwilightIcon /> Sunset <strong>{formatTime(info.sunset)}</strong></span>
        </div>
      </div>
    </div>
  );
}

function formatTime(timestamp) {
  if (!timestamp) return "--:--";
  return new Intl.DateTimeFormat([], { hour: "numeric", minute: "2-digit" }).format(timestamp * 1000);
}
