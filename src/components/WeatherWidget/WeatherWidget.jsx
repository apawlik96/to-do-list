import { StyledWrapper, StyledWrapperWeather } from "./WeatherWidget.styles";
import { useState, useEffect } from "react";
import getLocation from "../../services/location";
import getWeather from "../../api/weather";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { Switch, FormControlLabel } from "@mui/material";

const weatherImages = {
  rainy: {
    condition: (data) => data.precipitation_probability > 50,
    image: "rainy-day",
    description: "Rainy image",
  },
  snowy: {
    condition: (data) => data.snowfall > 0,
    image: "snow",
    description: "Snowy image",
  },
  windy: {
    condition: (data) => data.windspeed > 20,
    image: "wind",
    description: "Windy image",
  },
  sunny: {
    condition: (data) => data.temperature > 20,
    image: "sun",
    description: "Sunny image",
  },
  cloud: {
    condition: () => true,
    image: "cloud",
    description: "Cloudy image",
  },
};

export const WeatherWidget = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);
  const [temperatureUnit, setTemperatureUnit] = useState("C");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const location = await getLocation();
        const weather = await getWeather(location);
        setWeatherData(weather);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchWeather();
  }, []);

  const getWeatherImage = () => {
    if (!weatherData) {
      console.error("Failed to get weather info.");
      return null;
    }

    const weatherImage = Object.keys(weatherImages)
      .map((key) => {
        if (weatherImages[key].condition(weatherData)) {
          return {
            image: `${process.env.PUBLIC_URL}/images/${weatherImages[key].image}.png`,
            description: weatherImages[key].description,
          };
        }
        return null;
      })
      .find((item) => item !== null);

    return weatherImage;
  };

  const weatherImage = getWeatherImage();

  const getTemperatureInF = (temperature) => (temperature * 9) / 5 + 32;

  const getTemperatureInCurrentUnits = (temperature) => {
    return temperatureUnit === "C"
      ? temperature
      : getTemperatureInF(temperature);
  };

  const toggleTemperatureUnit = () => {
    setTemperatureUnit((prevUnit) => (prevUnit === "C" ? "F" : "C"));
  };

  if (isLoading) {
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
          src={weatherImage.image}
          height="80"
          width="80"
          alt={weatherImage.description}
        />
        <p>
          {getTemperatureInCurrentUnits(weatherData.temperature).toFixed(1)}°
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
