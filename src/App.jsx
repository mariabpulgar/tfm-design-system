import React from 'react';
import './App.css'
import Divider from './components/Divider'
import Button from './components/Button'
import InputText from './components/InputText';
import Tooltip from './components/Tooltip'


function App() {
  return (
    <div>
      <p>Hello world</p>
      <Divider variant="fullWidth" />
      <p>Bye world</p>
      <Button
        onClick={() => {}}
        size="medium"
        text="Error Button"
        variant="btn-error"
      />
      <InputText
        id="default-input"
        label="Nombre"
        name="defaultInput"
        onChange={() => {}}
        placeholder="Ingresa tu nombre"
        value=""
      />
      <Tooltip
        content="Este es un tooltip con información útil para el usuario."
        iconColor="#FEFEFE"
        iconName="infoIcon"
        iconSize="medium"
        position="top"
        trigger="click"
      />
    </div>    
  );
}

export default App
 
