import { useEffect } from "react";
import axios from "axios";

export const GetWeather = ({ location, setWeatherData, setError }) => {
  useEffect(() => {
    const getCurrentWeather = async () => {
      const { latitude, longitude } = location;
      try {
        const response = await axios.get(
          `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,precipitation,snowfall,wind_speed_10m&hourly=`
        );
        const currentWeather = response.data.current;
        setWeatherData({
          temperature: currentWeather.temperature_2m,
          windspeed: currentWeather.wind_speed_10m,
          snowfall: currentWeather.snowfall,
          humidity: currentWeather.relative_humidity_2m,
          precipitation_probability: currentWeather.precipitation,
        });
      } catch (error) {
        console.error(error);
        setError("Failed to fetch weather data.");
      }
    };

    getCurrentWeather();
  }, [location, setWeatherData, setError]);
};

export default GetWeather;
