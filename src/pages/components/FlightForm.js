import React, { useState } from 'react';
import { flightOptions } from '../../data/flightsdata';

const airports = ['Nakuru', 'Nairobi', 'Mombasa', 'Kisumu', 'Eldoret', 'Malindi'];

function FlightForm({ setFlightData }) {
  const [tripType, setTripType] = useState('oneway');
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [depart, setDepart] = useState('');
  const [ret, setRet] = useState('');
  const [travellers, setTravellers] = useState(1);
  const [cls, setCls] = useState('Economy');

  const handleSearch = () => {
    const results = flightOptions
      .filter(f =>
        f.from === from &&
        f.to === to &&
        f.class === cls
      )
      .map(flight => ({
        ...flight,
        price: tripType === 'roundtrip' ? flight.price * 1.8 : flight.price,
        tripType,
      }));
    setFlightData(results);
  };

  return (
    <div className="flight-form">
      <div className="trip-options">
        <label>
          <input type="radio" value="oneway" checked={tripType === 'oneway'} onChange={() => setTripType('oneway')} />
          One Way
        </label>
        <label>
          <input type="radio" value="roundtrip" checked={tripType === 'roundtrip'} onChange={() => setTripType('roundtrip')} />
          Round Trip
        </label>
      </div>

      <div className="form-fields">
        {/* FROM Dropdown */}
        <select value={from} onChange={e => setFrom(e.target.value)}>
          <option value="">From</option>
          {airports.map(airport => (
            <option key={airport} value={airport}>{airport}</option>
          ))}
        </select>

        {/* TO Dropdown */}
        <select value={to} onChange={e => setTo(e.target.value)}>
          <option value="">To</option>
          {airports.filter(a => a !== from).map(airport => (
            <option key={airport} value={airport}>{airport}</option>
          ))}
        </select>

        {/* DEPART DATE */}
        <input type="date" value={depart} onChange={e => setDepart(e.target.value)} />

        {/* RETURN DATE */}
        {tripType === 'roundtrip' && (
          <input type="date" value={ret} onChange={e => setRet(e.target.value)} />
        )}

        {/* TRAVELLERS */}
        <select value={travellers} onChange={e => setTravellers(Number(e.target.value))}>
          {[1,2,3,4,5].map(num => (
            <option key={num} value={num}>
              {num} Traveller{num > 1 && 's'}
            </option>
          ))}
        </select>

        {/* CLASS */}
        <select value={cls} onChange={e => setCls(e.target.value)}>
          <option>Economy</option>
          <option>Business</option>
        </select>

        {/* SEARCH BUTTON */}
        <button onClick={handleSearch}>Search</button>
      </div>
    </div>
  );
}

export default FlightForm;
