import React, { useEffect } from "react";
import { MapContainer, TileLayer, Marker, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
const Icon = L.icon({
  iconUrl: "./placeholder.png",
  iconSize: [30, 30],
});
const ResetMapView = ({ selectSearch }) => {
  const map = useMap();
  useEffect(() => {
    if(selectSearch){
        map.setView(L.latLng(selectSearch?.lat, selectSearch?.lon), map.getZoom(), {
            animate: true,
          });
      }
  }, [selectSearch])
  return null
};

function Map({ selectSearch }) {
  const position = ["12.9767936", "77.590082"];
  return (
    <MapContainer
      center={position}
      zoom={12}
      style={{ width: "100%", height: "100%" }}
      scrollWheelZoom={false}
    >
      <TileLayer url="https://api.maptiler.com/maps/basic-v2/{z}/{x}/{y}.png?key=7Ny1ZiBJDUdxAHlSGrrH" />
      {<Marker position={position} icon={Icon}></Marker>}
      <ResetMapView selectSearch={selectSearch} />
    </MapContainer>
  );
}

export default Map;
