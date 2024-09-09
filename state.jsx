import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const StatePage = () => {
    const [state, setState] = useState('');
    const [country, setCountry] = useState(localStorage.getItem('country') || '');
    const navigate = useNavigate();

    const handleSubmit = () => {
        localStorage.setItem('state', state);
        navigate('/district');
    };

    return (
        <div>
            <h1>Select State</h1>
            <label>Country: </label>
            <select>
                <option>{country}</option>
            </select>
            <input type="text" value={state} onChange={(e) => setState(e.target.value)} placeholder="Enter your state" />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
};

export default StatePage;
