import axios from "axios";

export const GetWeather = (location) => {
    const { latitude, longitude } = location;

    const currentParams = "temperature_2m,relative_humidity_2m,precipitation,snowfall,wind_speed_10m";

    return new Promise(async (resolve, reject) => {
        try {
            const response = await axios.get(
                `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=${currentParams}&hourly=`
            );
            const currentWeather = response.data.current;
            resolve({
                temperature: currentWeather.temperature_2m,
                windspeed: currentWeather.wind_speed_10m,
                snowfall: currentWeather.snowfall,
                humidity: currentWeather.relative_humidity_2m,
                precipitation_probability: currentWeather.precipitation,
            });
        } catch (error) {
            reject("Failed to fetch weather data.");
        }
    });
};

export default GetWeather;
