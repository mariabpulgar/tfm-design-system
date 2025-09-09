import React from 'react';
import './App.css';
import {useState} from 'react';
import Adoptions from './components/templates/Adoptions';


function App() {
  const [isAccepted, setIsAccepted] = useState(false);

  const handleAcceptChange = (e) => {
    setIsAccepted(e.target.checked);
  };


  return (
    <div>
      <Adoptions></Adoptions>
    </div>    
  );
};

export default App
 
