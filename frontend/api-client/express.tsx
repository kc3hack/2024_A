// Express.tsx
import { useEffect, useState } from "react";
import { getIPAddresses } from "../utils/get-ipaddress";

function Express() {
  const [locations, setLocations] = useState<{ id: number; name: string }[]>(
    [],
  );

  const ipAddresses = getIPAddresses();
  if (ipAddresses.length === 0)
    throw new Error("IPアドレスが見つかりませんでした。");
  const ip = ipAddresses[0];

  useEffect(() => {
    fetch(`https://${ip}:3000/locations`)
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
