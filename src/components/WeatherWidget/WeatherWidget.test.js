import { render, screen, fireEvent } from "@testing-library/react";
import { WeatherWidget } from "./WeatherWidget";
import useWeather from "../../hooks/useWeather";

jest.mock('../../hooks/useWeather');

describe("Weather Widget Component", () => {
    const mockWeatherData = {
        temperature: 15,
        snowfall: 5,
        windspeed: 25,
        humidity: 80,
        precipitation_probability: 60,
    };

    beforeEach(() => {
        jest.clearAllMocks();
    });

    it("render weather data when data is available", () => {
        useWeather.mockReturnValue({
            weatherData: mockWeatherData,
            refreshWeather: jest.fn(),
            isLoading: false,
            error: null,
        });

        render(<WeatherWidget />);

        expect(screen.getByText('Weather Forecast')).toBeInTheDocument();
        expect(screen.getByText('15.0°C')).toBeInTheDocument();
        expect(screen.getByText('Snowfall: 5cm')).toBeInTheDocument();
        expect(screen.getByText('Wind: 25km/h')).toBeInTheDocument();
        expect(screen.getByText('Humidity: 80%')).toBeInTheDocument();
        expect(screen.getByText('Probability of precipitation: 60%')).toBeInTheDocument();
    });

    it('render error message', () => {
        useWeather.mockReturnValue({
            weatherData: null,
            refreshWeather: jest.fn(),
            isLoading: false,
            error: 'Failed to fetch weather data.',
        });

        render(<WeatherWidget />);
        expect(screen.getByText('Failed to fetch weather data.')).toBeInTheDocument();
    });

    it('toggle temperature unit between Celsius and Fahrenheit', () => {
        useWeather.mockReturnValue({
            weatherData: mockWeatherData,
            refreshWeather: jest.fn(),
            isLoading: false,
            error: null,
        });

        render(<WeatherWidget />);

        expect(screen.getByText('15.0°C')).toBeInTheDocument();

        const toggleSwitch = screen.getByRole('checkbox');
        fireEvent.click(toggleSwitch);

        expect(screen.getByText('59.0°F')).toBeInTheDocument();
    });

    it('handle refresh button', () => {
        const refreshWeather = jest.fn();
        useWeather.mockReturnValue({
            weatherData: mockWeatherData,
            refreshWeather,
            isLoading: false,
            error: null,
        });

        render(<WeatherWidget />);

        const refreshButton = screen.getByRole('button', { name: /refresh-button/i });
        fireEvent.click(refreshButton);

        expect(refreshWeather).toHaveBeenCalledTimes(1);
    });
});
