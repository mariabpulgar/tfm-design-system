import React from 'react';
import './App.css'
import Divider from './components/Divider'
import Button from './components/Button'


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
    </div>    
  );
}

export default App
 
