import React, { useState } from "react";
import "../styles/Home.scss";
import Map from "../components/Map";

const Home = () => {
  const [ip, setIp] = useState("")
  const changedIp = (event: any) => {
    setIp(event.target.value)
  }

  return (
    <div>
      <header>
        <div className="header-container">
          <h1>IP Address Tracker</h1>
          <form className="form-container">
            <input type="text" onChange={changedIp} name="ipAddress" id="ipAddress" className="form-container__input" placeholder="Search for IP address..."></input>
            <button type="button" className="form-container__button"> &gt; </button>
          </form>
        </div>
      </header>
      <Map ip={ip}/>
    </div>
  );
};

export default Home;
