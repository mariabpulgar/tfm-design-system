import React from 'react';
import './App.css'
import AlertBox from './components/AlertBox';
import ButtonGroup from './components/ButtonGroup'
import SimpleCard from './components/SimpleCard';
import Dropdown from './components/Dropdown'


function App() {
  return (
    <div>
      <SimpleCard
        description="este es un ejemplo"
        title="Card 1"
        variant="vertical"
      />
      <Dropdown
        items={[
          {
            label: 'Opción 01'
          },
          {
            label: 'Opción 02'
          },
          {
            label: 'Opción 03'
          }
        ]}
        title="Choose"
      />
    </div>    
  );
}

export default App
 
