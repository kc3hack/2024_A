export interface pointData {
  id: number;
  long: string;
  lat: string;
  musicId: number;
}

export async function getLocation(id: number): Promise<pointData> {
  const response = await fetch(
    `https://192.168.37.141:3000/get-location/${id}`,
  ).then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  });
  return response;
}

export async function getAllLocations(): Promise<pointData[]> {
  const response = await fetch(
    "https://192.168.37.141:3000/get-all-locations",
  ).then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  });
  return response;
}

export async function createLocation(
  long: number,
  lat: number,
  musicID: number,
): Promise<pointData> {
  const sendData = {
    id: 0, //dummy Data
    long: long.toString(),
    lat: lat.toString(),
    musicID: musicID,
  };
  const response = await fetch("https://192.168.37.141:3000/create-location", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(sendData),
  }).then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  });
  return response;
}

export async function deleteLocation(id: number): Promise<pointData> {
  const response = await fetch(
    `https://192.168.37.141:3000/delete-location/${id}`,
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

export async function getReverseGeocoding(
  lat: number,
  long: number,
): Promise<string> {
  const response = await fetch(
    `https://192.168.37.141:3000/get-reverse-geocoding?lat=${lat}&long=${long}`,
  ).then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  });
  return response;
}
