import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CountryPage from './Country';
import StatePage from './state';
import DistrictPage from './district';
import CityPage from './city';
import FillFormPage from './EnterLocation';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CountryPage />} />
        <Route path="/state" element={<StatePage />} />
        <Route path="/district" element={<DistrictPage />} />
        <Route path="/city" element={<CityPage />} />
        <Route path="/fillform" element={<FillFormPage />} />
      </Routes>
    </Router>
  );
}

export default App;
