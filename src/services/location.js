const getLocation = () => {
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
        } else {
            reject(new Error("Geolocation is not supported by this browser."));
        }
    });
};

export default getLocation;
