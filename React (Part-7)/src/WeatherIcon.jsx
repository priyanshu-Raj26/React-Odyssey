import AcUnitIcon from "@mui/icons-material/AcUnit";
import CloudIcon from "@mui/icons-material/Cloud";
import GrainIcon from "@mui/icons-material/Grain";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import WbSunnyIcon from "@mui/icons-material/WbSunny";

const iconMap = {
  Clear: WbSunnyIcon,
  Clouds: CloudIcon,
  Drizzle: GrainIcon,
  Rain: GrainIcon,
  Snow: AcUnitIcon,
  Thunderstorm: ThunderstormIcon,
};

export default function WeatherIcon({ weatherMain = "Clear", large = false }) {
  const Icon = iconMap[weatherMain] || CloudIcon;

  return (
    <span className={`weather-icon ${large ? "weather-icon--large" : ""}`} aria-hidden="true">
      <Icon />
    </span>
  );
}
