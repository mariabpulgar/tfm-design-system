import React from 'react';
import './App.css';
import {useState} from 'react';
import Adoptions from './components/templates/Adoptions';
import Home from './components/templates/Home';


function App() {
  const [isAccepted, setIsAccepted] = useState(false);

  const handleAcceptChange = (e) => {
    setIsAccepted(e.target.checked);
  };


  return (
    <div>
      <Home></Home>
    </div>    
  );
};

export default App
 
