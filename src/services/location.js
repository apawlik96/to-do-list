export const GetLocation = () => {
    return new Promise((resolve, reject) => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;
                    resolve({ latitude, longitude });
                },
                (error) => {
                    console.error(error);
                    reject(new Error("Failed to retrieve location."));
                }
            );
        }
    });
};

export default GetLocation;
