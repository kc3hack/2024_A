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
    fetch("https://192.168.11.14:3000/get-all-locations")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then(setLocations)
      .catch((error) => {
        console.error(
          "There has been a problem with your fetch operation:",
          error,
        );
      });
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
