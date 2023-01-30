import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "../styles/Map.scss";
import "leaflet/dist/leaflet.css";

const Map = () => {
  return (
    <div>
      <MapContainer
        center={[-20.807311651673054, -49.37470293652349]}
        zoom={10}
        style={{ width: "100vw", height: "100vh" }}
      >
        <TileLayer url="https://api.maptiler.com/maps/streets-v2/256/{z}/{x}/{y}.png?key=UIxIoJYNQeKFafrJWhL0"></TileLayer>
        attribuition='
        <a href="https://www.maptiler.com/copyright/" target="_blank">
          &copy; MapTiler
        </a>{" "}
        <a href="https://www.openstreetmap.org/copyright" target="_blank">
          &copy; OpenStreetMap contributors
        </a>
        '
      </MapContainer>
    </div>
  );
};

export default Map;
