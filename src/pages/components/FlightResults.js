import React from 'react';

function FlightResults({ data }) {
  if (data.length === 0) return null;

  return (
    <div className="results">
      <h2>Available Flights</h2>
      {data.map((flight, index) => (
        <div className="flight-card" key={index}>
          <div>{flight.from} → {flight.to}</div>
          <div>{flight.airline}</div>
          <div>{flight.time}</div>
          <div>KSH {flight.price}</div>
        </div>
      ))}
    </div>
  );
}

export default FlightResults;
