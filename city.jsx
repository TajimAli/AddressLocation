import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const CityPage = () => {
    const [city, setCity] = useState('');
    const [country, setCountry] = useState(localStorage.getItem('country') || '');
    const [state, setState] = useState(localStorage.getItem('state') || '');
    const [district, setDistrict] = useState(localStorage.getItem('district') || '');
    const navigate = useNavigate();

    const handleSubmit = () => {
        localStorage.setItem('city', city);
        navigate('/fillform');
    };

    return (
        <div>
            <h1>Select City</h1>
            <label>Country:</label>
            <select>
                <option>{country}</option>
            </select>
            <label>State: </label>
            <select>
                <option>{state}</option>
            </select>
            <label>District:</label>
            <select>
                <option>{district}</option>
            </select>
            <input type="text" value={city} onChange={(e) => setCity(e.target.value)} placeholder="Enter your city" />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
};

export default CityPage;
