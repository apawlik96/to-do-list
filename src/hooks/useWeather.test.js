import { renderHook } from '@testing-library/react-hooks';
import useWeather from './useWeather';
import { getWeather } from '../api/weather';

jest.mock('../api/weather');

describe('useWeather', () => {

    test('set weather data when the fetch is successful', async () => {
        getWeather.mockResolvedValue({ temp: 22 });

        const { result, waitForNextUpdate } = renderHook(() => useWeather('Cracow'));

        await waitForNextUpdate();

        expect(result.current.weatherData).toEqual({ temp: 22 });
        expect(result.current.isLoading).toBe(false);
        expect(result.current.error).toBeNull();
    });

    test('handle error', async () => {
        getWeather.mockRejectedValue(new Error('Failed to fetch weather data.'));
        const { result, waitForNextUpdate } = renderHook(() => useWeather('Cracow'));

        await waitForNextUpdate();

        expect(result.current.weatherData).toBeNull();
        expect(result.current.isLoading).toBe(false);
        expect(result.current.error).toBe('Failed to fetch weather data.');
    });
});