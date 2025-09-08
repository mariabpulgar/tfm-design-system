import React from 'react';
import './App.css';
import TextArea from './components/atoms/TextArea';
import Home from './components/templates/Home';
import {useState} from 'react';

function App() {
const [password, setPassword]= useState("");


  return (
    <div>
      <TextArea
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Escribe tu mensaje aquí..."
        rows={4}
        value={password}
      />
      <Home></Home>

    </div>    
  );
};

export default App
 
