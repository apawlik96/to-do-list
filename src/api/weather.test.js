import { getWeather } from "./weather";

import axios from 'axios';

jest.mock('axios');

describe('getWeather', () => {
    it('return weather data when API call is successful', async () => {
        axios.get.mockResolvedValue({
            data: {
                current: {
                    temperature_2m: 20,
                    wind_speed_10m: 5,
                    snowfall: 0,
                    relative_humidity_2m: 80,
                    precipitation: 0,
                },
            },
        });

        const location = { latitude: 50.0647, longitude: 19.9450 };
        const data = await getWeather(location);
        
        expect(data).toEqual({
            temperature: 20,
            windspeed: 5,
            snowfall: 0,
            humidity: 80,
            precipitation_probability: 0,
        });
    });

    it('throw an error when API call fails', async () => {
        axios.get.mockRejectedValue(new Error('API Error'));
        
        const location = { latitude: 50.0647, longitude: 19.9450 };
        await expect(getWeather(location)).rejects.toEqual('Failed to fetch weather data.');
    });
});