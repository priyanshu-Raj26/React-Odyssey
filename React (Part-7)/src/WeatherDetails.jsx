import AirIcon from "@mui/icons-material/Air";
import DeviceThermostatIcon from "@mui/icons-material/DeviceThermostat";
import OpacityIcon from "@mui/icons-material/Opacity";
import VisibilityIcon from "@mui/icons-material/Visibility";

function Detail({ icon, label, value }) {
  return (
    <div className="detail">
      <div className="detail__icon">{icon}</div>
      <div>
        <p className="detail__label">{label}</p>
        <p className="detail__value">{value}</p>
      </div>
    </div>
  );
}

export default function WeatherDetails({ info }) {
  return (
    <section className="details-grid" aria-label="Weather details">
      <Detail icon={<OpacityIcon />} label="Humidity" value={`${info.humidity}%`} />
      <Detail icon={<AirIcon />} label="Wind" value={`${info.windSpeed ?? "--"} m/s`} />
      <Detail
        icon={<VisibilityIcon />}
        label="Visibility"
        value={info.visibility ? `${(info.visibility / 1000).toFixed(1)} km` : "--"}
      />
      <Detail icon={<DeviceThermostatIcon />} label="Feels like" value={`${Math.round(info.feelsLike)}°`} />
    </section>
  );
}
