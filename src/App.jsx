import React from 'react';
import './App.css';
import Checkbox from './components/atoms/Checkbox';
import Home from './components/templates/home';
import {useState} from 'react';
import StatusLabel from './components/molecules/StatusLabel';

function App() {
  const [isAccepted, setIsAccepted] = useState(false);

  const handleAcceptChange = (e) => {
    setIsAccepted(e.target.checked);
  };


  return (
    <div>
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <StatusLabel />
      <StatusLabel variant="active" text="Activo" />
      <StatusLabel variant="warning" text="Advertencia" />
      <StatusLabel variant="errorLabel" text="Error" />
    </div>
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
 
