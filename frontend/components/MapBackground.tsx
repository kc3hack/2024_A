import React, { useState, useEffect } from 'react';
import '../styles/MapBackground.css'; // 外部のCSSファイルをインポート

const API_KEY = 'api';

const MapBackground = ({latitude, longitude}:{latitude: number; longitude:number;}) => {
  const [weather, setWeather] = useState(null);
  console.log("latitude", latitude, "longitude", longitude);
  useEffect(() => {
    if (latitude && longitude) {
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`;

      fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
          setWeather(data.weather[0].main);
        })
        .catch(error => {
          console.error('Error fetching weather data:', error);
        });
    }
  }, [latitude, longitude]);

  let weatherClass = 'default';
  if (weather === 'Clear') {
    weatherClass = 'clear';
  } else if (weather === 'Clouds') {
    weatherClass = 'cloud';
  } else if (weather === 'Rain') {
    weatherClass = 'rain';
  }

  return (
    <div className={`map-background ${weatherClass}`}>
      {/* ここに地図やその他のコンテンツを表示 */}
    </div>
  );
};

export default MapBackground;
