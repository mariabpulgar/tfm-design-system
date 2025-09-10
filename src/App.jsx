import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import {useState} from 'react';
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
        <Route path="/" element={<Home/>} />
        <Route path="/adopciones" element={<Adoptions />} />
        <Route path="/adoptionForm" element={<AdoptionForm/>}></Route>
        <Route path="/donation" element={<Donation/>}></Route>
        {/* aquí más rutas */}
      </Routes>
    </BrowserRouter>
  );
};

export default App
 
