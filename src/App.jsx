import React from 'react';
import './App.css';
import Checkbox from './components/atoms/Checkbox';
import Home from './components/templates/home';
import {useState} from 'react';
import StatusLabel from './components/molecules/StatusLabel';
import ButtonCard from './components/molecules/ButtonCard';
import Accordion2 from './components/organisms/Accordion2';
import CardList from './components/organisms/CardList';
import Adopciones from './components/templates/Adopciones';


function App() {
  const [isAccepted, setIsAccepted] = useState(false);

  const handleAcceptChange = (e) => {
    setIsAccepted(e.target.checked);
  };


  return (
    <div>

      <Adopciones></Adopciones>

    </div>    
  );
};

export default App
 
