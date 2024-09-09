import React, { useState, useEffect } from 'react';

const FillFormPage = () => {
  const [country, setCountry] = useState(localStorage.getItem('country') || '');
  const [state, setState] = useState(localStorage.getItem('state') || '');
  const [district, setDistrict] = useState(localStorage.getItem('district') || '');
  const [city, setCity] = useState(localStorage.getItem('city') || '');
  const [statesList, setStatesList] = useState([]);
  const [districtsList, setDistrictsList] = useState([]);
  const [citiesList, setCitiesList] = useState([]);

  useEffect(() => {
    if (country === 'India') {
      setStatesList(['Maharashtra', 'Karnataka', 'Delhi']);
    } else if (country === 'USA') {
      setStatesList(['California', 'Texas', 'New York']);
    }
  }, [country]);

  useEffect(() => {
    if (state === 'Maharashtra') {
      setDistrictsList(['Pune', 'Mumbai', 'Nagpur']);
    } else if (state === 'California') {
      setDistrictsList(['Los Angeles', 'San Francisco', 'San Diego']);
    }
  }, [state]);

  useEffect(() => {
    if (district === 'Pune') {
      setCitiesList(['Pimpri', 'Chinchwad', 'Hinjewadi']);
    } else if (district === 'Los Angeles') {
      setCitiesList(['Santa Monica', 'Hollywood', 'Beverly Hills']);
    }
  }, [district]);

  return (
    <div>
      <h1>Fill Form</h1>
      <label>Country: </label>
      <select value={country} onChange={(e) => setCountry(e.target.value)}>
        <option value="India">India</option>
        <option value="USA">USA</option>
      </select>
      <br />

      <label>State: </label>
      <select value={state} onChange={(e) => setState(e.target.value)}>
        {statesList.map((state) => (
          <option key={state} value={state}>
            {state}
          </option>
        ))}
      </select>
      <br />

      <label>District: </label>
      <select value={district} onChange={(e) => setDistrict(e.target.value)}>
        {districtsList.map((district) => (
          <option key={district} value={district}>
            {district}
          </option>
        ))}
      </select>
      <br />

      <label>City: </label>
      <select value={city} onChange={(e) => setCity(e.target.value)}>
        {citiesList.map((city) => (
          <option key={city} value={city}>
            {city}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FillFormPage;
