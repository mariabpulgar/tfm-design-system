import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';

import Adoptions from './components/templates/Adoptions';
import Home from './components/templates/Home';
import AdoptionForm from './components/templates/AdoptionForm';
import Donation from './components/templates/Donation';

function App() {
  const [isAccepted, setIsAccepted] = useState(false);

  const handleAcceptChange = (e) => {
    setIsAccepted(e.target.checked);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/adopciones" element={<Adoptions />} />
        <Route path="/adoptionForm" element={<AdoptionForm />} />
        <Route path="/donation" element={<Donation />} />
        
        {/* Ruta comodín: redirige a inicio si no encuentra coincidencia */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
