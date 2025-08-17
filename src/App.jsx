import React from 'react';
import './App.css'
import AlertBox from './components/AlertBox';
import ButtonGroup from './components/ButtonGroup'
import SimpleCard from './components/SimpleCard';


function App() {
  return (
    <div>
      <SimpleCard
        description="este es un ejemplo"
        title="Card 1"
        variant="vertical"
      />
    </div>    
  );
}

export default App
 
