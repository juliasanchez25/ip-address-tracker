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
          <form className="form-container">
            <input type="text" name="ipAddress" id="ipAddress" className="form-container__input" placeholder="Search for IP address..."></input>
            <button type="submit" className="form-container__button"> &gt; </button>
          </form>
        </div>
      </header>
      <Address />
      <Map />
    </div>
  );
};

export default Home;
