import { useEffect } from "react";

export const GetLocation = ({ setLocation, setError }) => {
  useEffect(() => {
    const fetchLocation = () => {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation({ latitude, longitude });
        },
        (error) => {
          console.error(error);
          setError("Failed to retrieve location.");
        }
      );
    };

    fetchLocation();
  }, [setLocation, setError]);
};

export default GetLocation;
