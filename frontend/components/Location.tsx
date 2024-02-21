import { useState, useEffect } from "react";
import {
  getLocation,
  getAllLocations,
  createLocation,
  deleteLocation,
} from "../api-client/location";

interface Location {
  id: number;
  long: string;
  lat: string;
}

function LocationComponent() {
  const [locations, setLocations] = useState<Location[]>([]);
  const [selectedLocation, setSelectedLocation] = useState<Location[]>([]);

  useEffect(() => {
    getAllLocations().then(setLocations);
  }, []);

  const handleCreateLocation = (long: string, lat: string) => {
    const id: number = 0; // idはサーバー側で自動生成されるので0で本来は必要ない
    const newLocation = { id, long, lat };
    createLocation(newLocation).then((createdLocation) => {
      setLocations([...locations, createdLocation]);
    });
  };

  const handleDeleteLocation = (id: number) => {
    deleteLocation(id).then(() => {
      setLocations(locations.filter((location) => location.id !== id));
    });
  };

  const handleSelectLocation = (id: number) => {
    getLocation(id).then(setSelectedLocation);
  };

  return (
    <div>
      <button onClick={() => handleCreateLocation("0", "0")}>
        Create Location
      </button>
      {locations.map((location) => (
        <div key={location.id}>
          <span>
            {location.long}, {location.lat}
          </span>
          <button onClick={() => handleSelectLocation(location.id)}>
            Select
          </button>
          <button onClick={() => handleDeleteLocation(location.id)}>
            Delete
          </button>
        </div>
      ))}
      {selectedLocation &&
        selectedLocation.map((location: Location) => (
          <div key={location.id}>
            <p>id: {location.id}</p>
            <p>Longitude: {location.long}</p>
            <p>Latitude: {location.lat}</p>
          </div>
        ))}
    </div>
  );
}

export default LocationComponent;
