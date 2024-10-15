import {
  StyledWrapper,
  StyledWrapperWeather,
  StyledTemperatureUnitParagraph,
} from "./WeatherWidget.styles";
import { useState } from "react";
import GetLocation from "./GetLocation";
import GetWeather from "./GetWeather";
import rainyImage from "./images/rainy-day.png";
import sunnyImage from "./images/sun.png";
import snowyImage from "./images/snow.png";
import windImage from "./images/wind.png";
import cloudImage from "./images/cloud.png";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

const weatherImages = {
  rainy: {
    condition: (data) => data.precipitation_probability > 50,
    image: rainyImage,
  },
  snowy: {
    condition: (data) => data.snowfall > 0,
    image: snowyImage,
  },
  windy: {
    condition: (data) => data.windspeed > 20,
    image: windImage,
  },
  sunny: {
    condition: (data) => data.temperature > 20,
    image: sunnyImage,
  },
  cloud: {
    condition: () => true,
    image: cloudImage,
  },
};

export const WeatherWidget = () => {
  const [location, setLocation] = useState(null);
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);
  const [isCelsius, setIsCelsius] = useState(true);

  const getWeatherImage = () => {
    if (!weatherData) return cloudImage;
    for (const key in weatherImages) {
      if (weatherImages[key].condition(weatherData)) {
        return weatherImages[key].image;
      }
    }
  };

  const weatherImage = getWeatherImage();

  const convertTemperature = (tempCelsius) => {
    return isCelsius ? tempCelsius : (tempCelsius * 9) / 5 + 32;
  };

  const handleTemperatureToggle = () => {
    setIsCelsius(!isCelsius);
  };

  return (
    <StyledWrapper>
      <h1>Weather Forecast</h1>

      <GetLocation setLocation={setLocation} setError={setError} />
      <GetWeather
        location={location}
        setWeatherData={setWeatherData}
        setError={setError}
      />

      {error ? (
        <p>{error}</p>
      ) : weatherData ? (
        <>
          <StyledWrapperWeather>
            <img src={weatherImage} height="80" width="80" alt="Weather img" />
            <p onClick={handleTemperatureToggle}>
              {convertTemperature(weatherData.temperature).toFixed(1)}{" "}
              <StyledTemperatureUnitParagraph isActive={isCelsius}>
                °C
              </StyledTemperatureUnitParagraph>{" "}
              |{" "}
              <StyledTemperatureUnitParagraph isActive={!isCelsius}>
                °F
              </StyledTemperatureUnitParagraph>
            </p>
          </StyledWrapperWeather>
          <ul>
            <li>Snowfall: {weatherData.snowfall}cm</li>
            <li>Wind: {weatherData.windspeed}km/h</li>
            <li>Humidity: {weatherData.humidity}%</li>
            <li>
              Probability of precipitation:{" "}
              {weatherData.precipitation_probability}%
            </li>
          </ul>
        </>
      ) : (
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <CircularProgress />
        </Box>
      )}
    </StyledWrapper>
  );
};
