import React, { useState, useRef, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import './Map.css';
import L from 'leaflet'
L.Icon.Default.imagePath = 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/'

export const Weather = () => {
  const [currentPosition, setCurrentPosition] = useState([35.173, 136.97]);
  const [markerPosition, setMarkerPosition] = useState([35.173, 136.97]);
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const markerRef = useRef(null)

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setCurrentPosition([latitude, longitude]);
          setMarkerPosition([latitude, longitude]);
          fetchWeather(latitude, longitude);
        },
        (error) => {
          console.error('Error getting the current position:', error);
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  }, []);

  const fetchWeather = async (latitude, longitude) => {
    const apiKey = '7bbac290c2908e298bfc731fbd9b08f0'; // OpenWeatherMap API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    try {
      setLoading(true);
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error('Weather data not available');
      }
      const data = await response.json();
      //console.log('Weather data:', data);
      setWeather(data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching weather data:', error);
      setLoading(false);
    }
  };

  const eventHandlers = {
    dragstart: () => {
      const marker = markerRef.current;
      marker.setOpacity(0.6);
    },
    dragend: () => {
      const marker = markerRef.current;
      marker.setOpacity(1);
      const newPosition = marker.getLatLng();
      setMarkerPosition([newPosition.lat, newPosition.lng]);
      fetchWeather(newPosition.lat, newPosition.lng);
    },
  };

  return (
    <MapContainer center={currentPosition} zoom={9}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker
        ref={markerRef}
        position={markerPosition}
        draggable={true}
        eventHandlers={eventHandlers}
      >
        <Popup>
          {loading ? (
            <div>Loading weather...</div>
          ) : weather ? (
            <>
              <div>{weather.name}</div>
              <div>Temperature: {weather.main.temp}°C</div>
              <div>Description: {weather.weather[0].description}</div>
            </>
          ) : (
            <div>No weather data available</div>
          )}
        </Popup>
      </Marker>
    </MapContainer>
  );
};
