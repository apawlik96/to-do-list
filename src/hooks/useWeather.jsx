import { useState, useEffect } from "react";
import getWeather from "../api/weather";

export const useWeather = (location) => {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchWeather = async () => {
    try {
      const weather = await getWeather(location);
      setWeatherData(weather);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchWeather();
  }, [location]);

  return [weatherData, fetchWeather, isLoading, error];
};

export default useWeather;
