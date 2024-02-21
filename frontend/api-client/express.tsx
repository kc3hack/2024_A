// Express.tsx
import { useEffect, useState } from "react";

function Express() {
  const [locations, setLocations] = useState<{ id: number; name: string }[]>(
    [],
  );

  useEffect(() => {
    fetch(`https://192.168.11.14:3000/locations`)
      .then((response) => response.json())
      .then(setLocations);
  }, []);

  return (
    <ul>
      {locations.map((location) => (
        <li key={location.id}>{location.name}</li>
      ))}
    </ul>
  );
}

export default Express;
