interface Location {
  id: number;
  long: string;
  lat: string;
}

export async function getLocation(id: number): Promise<Location[]> {
  const response = await fetch(
    `https://192.168.11.14:3000/get-location/${id}`,
  ).then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  });
  return response;
}

export async function getAllLocations(): Promise<Location[]> {
  const response = await fetch(
    "https://192.168.11.14:3000/get-all-locations",
  ).then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  });
  return response;
}

export async function createLocation(location: Location): Promise<Location> {
  const response = await fetch("https://192.168.11.14:3000/create-location", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(location),
  }).then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  });
  return response;
}

export async function deleteLocation(id: number): Promise<Location> {
  const response = await fetch(
    `https://192.168.11.14:3000/delete-location/${id}`,
    {
      method: "DELETE",
    },
  ).then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  });
  return response;
}
