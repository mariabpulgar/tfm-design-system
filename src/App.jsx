import React from 'react';
import './App.css';
import InputText from './components/atoms/InputText';
import Home from './components/templates/home';


function App() {


  return (
    <div>
      <InputText
        label="Contraseña"
        minLength={8}
        name="password"
        onChange={(e) => {e.target.value}}
        placeholder="Contraseña"
        type="password"
        value="{val}"
      />
      <Home></Home>

    </div>    
  );
};

export default App
 
