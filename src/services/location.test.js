import { getLocation } from "./location.js";

describe('getLocation', () => {

    it('return latitude and longitude on success', async () => {
        const mockPosition = {
            coords: {
                latitude: 50.0647,
                longitude: 19.9450,
            },
        };
        global.navigator.geolocation = {
            getCurrentPosition: jest.fn((success) => success(mockPosition)),
        };
        await expect(getLocation()).resolves.toStrictEqual({
            "latitude": 50.0647,
            "longitude": 19.9450,
        });
    });

    it('throw an error if geolocation fails', async () => {
        global.navigator.geolocation = {
            getCurrentPosition: jest.fn((success, error) => {
                error(new Error("Permission denied"));
            })
        };
        await expect(getLocation()).rejects.toThrow('Failed to retrieve location.');
    });

    it('throw an error if geolocation is not supported', async () => {
        global.navigator.geolocation = undefined;
        await expect(getLocation()).rejects.toThrow('Geolocation is not supported by this browser.');
    });
});