import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "../styles/Map.scss";
import "leaflet/dist/leaflet.css";
import icon from "../components/icon"
import { useState, useEffect } from "react"
import "dotenv"

const Map = ({ ip }: any) => {
  console.log(ip)
  const [address, setAddress]: any = useState(null)

  useEffect(() => {
    const getInitialData = async () => {
      const res = await fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=${import.meta.env.VITE_API_KEY}&ipAddress=8.8.8.8`)
      const data = await res.json()
      setAddress(data)
    }

    getInitialData()
  }, [address])

  return (
    <div>
      {address && <div className="address-info-container">
        <div className="address-info-container__list">
          <div className="address-info-container__list__item">
            <h1>IP Address</h1>
            <p>{address.ip}</p>
          </div>
          <div className="address-info-container__list__item">
            <h1>Location</h1>
            <p>{address.location.city}, {address.location.region}</p>
          </div>
          <div className="address-info-container__list__item">
            <h1>Timezone</h1>
            <p>UTC {address.location.timezone}</p>
          </div>
          <div className="address-info-container__list__item">
            <h1>ISP</h1>
            <p>
              {address.isp}
            </p>
          </div>
        </div>
      </div>}

      {address && <>
        <MapContainer
          center={[-20.807311651673054, -49.37470293652349]}
          zoom={10}
          scrollWheelZoom={true}
          style={{ width: "100vw", height: "100vh" }}
        >
          <TileLayer url="https://api.maptiler.com/maps/streets-v2/256/{z}/{x}/{y}.png?key=UIxIoJYNQeKFafrJWhL0"></TileLayer>
          <Marker icon={icon} position={[-20.807311651673054, -49.37470293652349]}>
            <Popup></Popup>
          </Marker>
          attribuition='
          <a href="https://www.maptiler.com/copyright/" target="_blank">
            &copy; MapTiler
          </a>{" "}
          <a href="https://www.openstreetmap.org/copyright" target="_blank">
            &copy; OpenStreetMap contributors
          </a>
          '
        </MapContainer>
      </>}
    </div>
  );
};


export default Map;
