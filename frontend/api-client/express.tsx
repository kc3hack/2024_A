// App.tsx
import { useEffect, useState } from "react";

interface Location {
  id: number;
  long: string;
  lat: string;
}

function Express() {
  const [locations, setLocations] = useState<Location[]>([]);

  useEffect(() => {
    fetch("https://192.168.11.14:3000/locations")
      .then((response) => response.json())
      .then(setLocations);
  }, []);

  return (
    <div>
      {locations.map((location) => (
        <div key={location.id}>
          <p>id: {location.id}</p>
          <p>Longitude: {location.long}</p>
          <p>Latitude: {location.lat}</p>
        </div>
      ))}
    </div>
  );
}

export default Express;
