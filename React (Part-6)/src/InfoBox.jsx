import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import SunnyIcon from "@mui/icons-material/Sunny";
import "./InfoBox.css";

export default function InfoBox({ info }) {
  const HOT_URL =
    "https://images.unsplash.com/photo-1471922694854-ff1b63b20054?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c3VtbWVyJTIwbGFuZHNjYXBlfGVufDB8fDB8fHww";
  const COLD_URL =
    "https://plus.unsplash.com/premium_photo-1671127303910-754ac2224c7a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d2ludGVyJTIwbGFuZHNjYXBlfGVufDB8fDB8fHww";
  const RAIN_URL =
    "https://media.istockphoto.com/id/898238970/photo/shower-in-the-garden-downpour-pouring-rain-in-the-summer.webp?a=1&b=1&s=612x612&w=0&k=20&c=lOsr2ZP1UqT_YsxtaETqAq74b-l-S_hHXFSFNcqBJnM=";

  return (
    <div className="info-box">
      <div className="card-container">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={
              info.humidity > 80
                ? RAIN_URL
                : info.temp > 15
                  ? HOT_URL
                  : COLD_URL
            }
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {info.city}{" "}
              {info.humidity > 80 ? (
                <ThunderstormIcon sx={{ color: "#42A5F5" }} />
              ) : info.temp > 15 ? (
                <SunnyIcon sx={{ color: "#FFC107" }} />
              ) : (
                <AcUnitIcon sx={{ color: "#42A5F5" }} />
              )}
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "text.secondary" }}
              component={"span"}
            >
              <p>Temperature: {info.temp}°C</p>
              <p>Humidity: {info.humidity}%</p>
              <p>Min Temperature: {info.tempmin}°C</p>
              <p>Max Temperature: {info.tempmax}°C</p>
              <p>
                The weather can be discribed as <i>{info.weather}</i> and Feels
                Like: {info.feelsLike}°C
              </p>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
