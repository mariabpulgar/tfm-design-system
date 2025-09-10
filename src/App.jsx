import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import {useState} from 'react';
import Adoptions from './components/templates/Adoptions';
import Home from './components/templates/Home';
import AdoptionForm from './components/templates/AdoptionForm';


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
        {/* aquí más rutas */}
      </Routes>
    </BrowserRouter>
  );
};

export default App
 
