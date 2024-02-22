import React, { useState, useRef, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L, { DragEndEvent } from "leaflet";
L.Icon.Default.imagePath =
  "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/";

const Weather = () => {
  const [currentPosition, setCurrentPosition] = useState<[number, number]>([
    35.173, 136.97,
  ]);
  const [markerPosition, setMarkerPosition] = useState<[number, number]>([
    35.173, 136.97,
  ]);
  const [weather, setWeather] = useState<Weather | null>(null);
  const [mapCenter, setMapCenter] = useState<[number, number]>(currentPosition);
  const [loading, setLoading] = useState(false);
  const [triggerFlyTo, setTriggerFlyTo] = useState(false);

  const markerRef = useRef(null);

  interface Weather {
    name: string;
    main: {
      temp: number;
    };
    weather: {
      description: string;
    }[];
  }

  useEffect(() => {
    getCurrentPosition();
  }, []);

  const MoveToCurrentPosition = ({
    position,
  }: {
    position: [number, number];
  }) => {
    const map = useMap();

    useEffect(() => {
      map.flyTo(position);
      setTriggerFlyTo(false);
    }, [position, map, triggerFlyTo]);

    return null;
  };

  const getCurrentPosition = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setCurrentPosition([latitude, longitude]);
          setMarkerPosition([latitude, longitude]);
          fetchWeather(latitude, longitude);
          console.log(latitude, longitude);
        },
        (error) => {
          console.error("Error getting the current position:", error);
        },
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  };

  const fetchWeather = async (latitude: number, longitude: number) => {
    const apiKey = "api"; // OpenWeatherMap API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    try {
      setLoading(true);
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error("Weather data not available");
      }
      const data = await response.json();
      setWeather(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching weather data:", error);
      setLoading(false);
    }
  };

  const handleMarkerDragEnd = (e: DragEndEvent) => {
    const newPosition = e.target.getLatLng();
    setMarkerPosition([newPosition.lat, newPosition.lng]);
    fetchWeather(newPosition.lat, newPosition.lng);
  };

  const handleRegisterMarkerPosition = () => {
    // マーカーの位置を登録する他の処理を追加する
    alert("マーカーの位置が登録されました: " + markerPosition);
  };

  const handleReturnToCurrentPosition = () => {
    setMarkerPosition(currentPosition);
    setMapCenter(currentPosition);
    setTriggerFlyTo(true);
  };

  return (
    <div>
      <div className="map">
        <MapContainer center={mapCenter} zoom={9} scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker
            ref={markerRef}
            position={markerPosition}
            draggable={true}
            eventHandlers={{ dragend: handleMarkerDragEnd }}
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
          <MoveToCurrentPosition position={currentPosition} />
        </MapContainer>
      </div>
      <div>
        <button onClick={handleRegisterMarkerPosition}>
          マーカーの位置を登録する
        </button>
        <div className="handleReturnToCurrentPosition">
          <button onClick={handleReturnToCurrentPosition}>現在地に戻る</button>
        </div>
      </div>
    </div>
  );
};

export default Weather;
