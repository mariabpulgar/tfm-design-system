import React from 'react';
import './App.css'
import Divider from './components/Divider'
import Button from './components/Button'
import InputText from './components/InputText';


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
    </div>    
  );
}

export default App
 
