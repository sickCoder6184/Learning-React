import { useEffect, useState } from "react";
import RestaurantList from "./RestaurantList";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const onlineStatus = useOnlineStatus();
  
  const [userLocation, setUserLocation] = useState({ lat: null, lng: null });
  const [locationLoaded, setLocationLoaded] = useState(false);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        pos => {
          setUserLocation({
            lat: pos.coords.latitude,
            lng: pos.coords.longitude
          });
          setLocationLoaded(true);
        },
        err => {
          // Default fallback if permission denied or error
          setUserLocation({ lat: 30.7567257, lng: 76.6430551 });
          setLocationLoaded(true);
        }
      );
    } else {
      setUserLocation({ lat: 30.7567257, lng: 76.6430551 });
      setLocationLoaded(true);
    }
  }, []);

  if (onlineStatus === false) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <div className="bg-red-100 p-6 rounded-lg shadow-md">
          <h1 className="text-2xl font-bold text-red-600 mb-2">
            Internet Not Connected
          </h1>
          <p className="text-gray-700">
            Please check your internet connection and try again.
          </p>
        </div>
      </div>
    );
  }

  if (!locationLoaded)
    return (
      <div className="text-center mt-12 text-lg text-gray-500">Detecting location...</div>
    );

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">
          Welcome to our Food Delivery App
        </h2>
        <p className="text-gray-600 text-lg">
          Explore our menu and order your favorite meals!
        </p>
      </div>
      <RestaurantList lat={userLocation.lat} lng={userLocation.lng} />
    </div>
  );
};

export default Body;
