
import FlightForm from './components/FlightForm';
import FlightResults from './components/FlightResults';
import "../styles/Flights.css"
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { NavLink } from 'react-router-dom';
import NavList from '../components/Navlist';
import Footer from '../components/Footer';



function Flights() {
  const [flightData, setFlightData] = useState([]);

  return (
    <div>
        <Navbar />
        <NavList />
        <div className="app">
      <div className="hero">
        <h1>Get. Set. Travel.</h1>
        <FlightForm setFlightData={setFlightData} />
      </div>
      <FlightResults data={flightData} />
    </div>
    <Footer />
    </div>
  );
}

export default Flights;
