import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const DistrictPage = () => {
    const [district, setDistrict] = useState('');
    const [country, setCountry] = useState(localStorage.getItem('country') || '');
    const [state, setState] = useState(localStorage.getItem('state') || '');
    const navigate = useNavigate();

    const handleSubmit = () => {
        localStorage.setItem('district', district);
        navigate('/city');
    };

    return (
        <div>
            <h1>Select District</h1>
            <label>Country:</label>
            <select>
                <option>{country}</option>
            </select>
            <label>State: </label>
            <select>
                <option>{state}</option>
            </select>
            <input type="text" value={district} onChange={(e) => setDistrict(e.target.value)} placeholder="Enter your district"/>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
};

export default DistrictPage;
