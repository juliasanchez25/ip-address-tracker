import React from "react";
import "../styles/Home.scss";
import Address from "../components/AddressComponent";
import Map from "../components/Map";
import {} from 'react-leaflet'

const Home = () => {
  return (
    <div>
      <header>
        <div className="header-container">
          <h1>IP Address Tracker</h1>
          <form>
            <input type="text" placeholder="Search for any IP address or domain"></input>
            <button type="submit"> &gt; </button>
          </form>
        </div>
      </header>
      <Address />
      <Map />
    </div>
  );
};

export default Home;
