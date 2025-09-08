import React from 'react';
import './App.css';
import InputText from './components/atoms/InputText';
import Home from './components/templates/home';
import {useState} from 'react';

function App() {
const [password, setPassword]= useState("");


  return (
    <div>
      <InputText
        label="Contraseña"
        minLength={8}
        name="password"
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Contraseña"
        type="text"
        value={password}
      />
      <Home></Home>

    </div>    
  );
};

export default App
 
