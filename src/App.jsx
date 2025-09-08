import React from 'react';
import './App.css';
import Checkbox from './components/atoms/Checkbox';
import Home from './components/templates/home';
import {useState} from 'react';

function App() {
  const [isAccepted, setIsAccepted] = useState(false);

  const handleAcceptChange = (e) => {
    setIsAccepted(e.target.checked);
  };


  return (
    <div>
      <h2>Términos y Condiciones</h2>
      <Checkbox
        id="accept-terms"
        label="Acepto los términos y condiciones"
        checked={isAccepted}
        onChange={handleAcceptChange}
      />
      <Home></Home>

    </div>    
  );
};

export default App
 
