import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CountryPage = () => {
  const [country, setCountry] = useState('');
  const navigate = useNavigate();

  const handleSubmit = () => {
    localStorage.setItem('country', country);
    navigate('/state');
  };

  return (
    <div>
      <h1>Select Country</h1>
      <input
        type="text"
        value={country}
        onChange={(e) => setCountry(e.target.value)}
        placeholder="Enter your country"
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default CountryPage;
