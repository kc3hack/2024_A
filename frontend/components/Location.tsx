import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L, { DragEndEvent } from "leaflet";
import {
  deleteLocation,
  pointData,
  createLocation,
  getAllLocations,
} from "../api-client/location";
import { useSelector } from "react-redux";
import { RootState } from "./store";
import { useNavigate } from "react-router-dom";
import "../styles/Map.css";

L.Icon.Default.imagePath =
  "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/";

const Location = () => {
  const [currentPosition, setCurrentPosition] = useState<[number, number]>([
    35.173, 136.97,
  ]);
  const [markerPosition, setMarkerPosition] = useState<[number, number]>([
    35.173, 136.97,
  ]);
  const [mapCenter, setMapCenter] = useState<[number, number]>(currentPosition);
  const [triggerFlyTo, setTriggerFlyTo] = useState(false);

  const [locations, setLocations] = useState<pointData[]>([]); // 座標を保持するstate
  // 状態変数を導入します。初期値は全てのマーカーが表示状態（true）です。
  const [visibleMarkers, setVisibleMarkers] = useState<{
    [key: number]: boolean;
  }>(
    locations.reduce((acc, location) => ({ ...acc, [location.id]: true }), {}),
  );

  const selectedMusicId = useSelector(
    (state: RootState) => state.selectedMusicId,
  );

  const navigate = useNavigate();

  useEffect(() => {
    getCurrentPosition();
    // 非同期関数を定義
    const fetchLocations = async () => {
      const locs = await getAllLocations(); // 座標を取得
      setLocations(locs); // stateを更新
    };

    // 非同期関数を呼び出し
    setVisibleMarkers(
      locations.reduce(
        (acc, location) => ({ ...acc, [location.id]: true }),
        {},
      ),
    );
    fetchLocations();
  }, [locations]);

  const MoveToCurrentPosition = ({
    position,
  }: {
    position: [number, number];
  }) => {
    const map = useMap();
    useEffect(() => {
      map.flyTo(currentPosition);
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
        },
        (error) => {
          console.error("Error getting the current position:", error);
        },
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  };

  const handleMarkerDragEnd = (e: DragEndEvent) => {
    const newPosition = e.target.getLatLng();
    setMarkerPosition([newPosition.lat, newPosition.lng]);
  };

  const handleReturnToCurrentPosition = () => {
    setMapCenter(currentPosition);
    setTriggerFlyTo(true);
  };

  const createPoint = (marker_pos: [number, number], _musicID: number) => {
    console.log(_musicID);
    createLocation(marker_pos[1], marker_pos[0], _musicID)
      .then(() => {
        console.log(marker_pos);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deletePointHandler = (id: number) => {
    console.log("削除します");
    setVisibleMarkers((prevState) => ({ ...prevState, [id]: false }));
    deleteLocation(id);
  };

  const registerMusicHandler = () => {
    console.log("音楽を登録します");
    navigate(`/register-music/`);

    if (selectedMusicId !== null) {
      createPoint(markerPosition, selectedMusicId);
    }
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
            position={markerPosition}
            eventHandlers={{ dragend: handleMarkerDragEnd }}
            zIndexOffset={1000}
            draggable={true}
          >
            <Popup>
              <div>
                <button onClick={registerMusicHandler}>音楽を登録する</button>
              </div>
            </Popup>
          </Marker>
          {triggerFlyTo && <MoveToCurrentPosition position={currentPosition} />}
          {locations.map(
            (location) =>
              visibleMarkers[location.id] && (
                <Marker
                  key={location.id}
                  position={[Number(location.lat), Number(location.long)]}
                >
                  <Popup>
                    <div className="deleteButton">
                      <button onClick={() => deletePointHandler(location.id)}>
                        削除
                      </button>
                    </div>
                  </Popup>
                </Marker>
              ),
          )}
        </MapContainer>
      </div>
      <div>
        <div className="handleReturnToCurrentPosition">
          <button onClick={handleReturnToCurrentPosition}>現在地に戻る</button>
        </div>
      </div>
    </div>
  );
};

export default Location;
