import { StyledWrapper, StyledWrapperWeather } from "./WeatherWidget.styles";
import { useState, useEffect } from "react";
import GetLocation from "../../services/location";
import GetWeather from "../../api/weather";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { Switch, FormControlLabel } from "@mui/material";

const rainyImage = process.env.PUBLIC_URL + "/images/rainy-day.png";
const sunnyImage = process.env.PUBLIC_URL + "/images/sun.png";
const snowyImage = process.env.PUBLIC_URL + "/images/snow.png";
const windImage = process.env.PUBLIC_URL + "/images/wind.png";
const cloudImage = process.env.PUBLIC_URL + "/images/cloud.png";

const weatherImages = {
  rainy: {
    condition: (data) => data.precipitation_probability > 50,
    image: rainyImage,
    description: "Rainy image",
  },
  snowy: {
    condition: (data) => data.snowfall > 0,
    image: snowyImage,
    description: "Snowy image",
  },
  windy: {
    condition: (data) => data.windspeed > 20,
    image: windImage,
    description: "Windy image",
  },
  sunny: {
    condition: (data) => data.temperature > 20,
    image: sunnyImage,
    description: "Sunny image",
  },
  cloud: {
    condition: () => true,
    image: cloudImage,
    description: "Cloudy image",
  },
};

export const WeatherWidget = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);
  const [temperatureUnit, setTemperatureUnit] = useState("C");

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const location = await GetLocation();
        const weather = await GetWeather(location);
        setWeatherData(weather);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchWeather();
  }, []);

  const getWeatherImage = () => {
    if (!weatherData)
      return { image: cloudImage, description: "Cloudy weather" };
    for (const key in weatherImages) {
      if (weatherImages[key].condition(weatherData)) {
        return {
          image: weatherImages[key].image,
          description: weatherImages[key].description,
        };
      }
    }
  };

  const weather = getWeatherImage();

  const convertTemperatureFromCToF = (temperature) => {
    return temperatureUnit === "C" ? temperature : (temperature * 9) / 5 + 32;
  };

  const toggleTemperatureUnit = () => {
    setTemperatureUnit((prevUnit) => (prevUnit === "C" ? "F" : "C"));
  };

  if (!weatherData && !error) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <StyledWrapper>
      <h1>Weather Forecast</h1>

      <StyledWrapperWeather>
        <img
          src={weather.image}
          height="80"
          width="80"
          alt={weather.description}
        />
        <p>
          {convertTemperatureFromCToF(weatherData.temperature).toFixed(1)}°
          {temperatureUnit}
        </p>
        <FormControlLabel
          control={
            <Switch
              checked={temperatureUnit === "F"}
              onChange={toggleTemperatureUnit}
            />
          }
          label={temperatureUnit === "C" ? "Celsius" : "Fahrenheit"}
        />
      </StyledWrapperWeather>
      <ul>
        <li>Snowfall: {weatherData.snowfall}cm</li>
        <li>Wind: {weatherData.windspeed}km/h</li>
        <li>Humidity: {weatherData.humidity}%</li>
        <li>
          Probability of precipitation: {weatherData.precipitation_probability}%
        </li>
      </ul>
    </StyledWrapper>
  );
};
