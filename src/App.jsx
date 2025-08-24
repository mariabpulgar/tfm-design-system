import React from 'react';
import './App.css';
import SimpleCard from './components/SimpleCard';
import gato from '../src/assets/perrito.jpg'



function App() {
  return (
    <div>
      <SimpleCard
        variant='vertical'
        title="Adopta un gato"
        description="Este es un hermoso gato que busca hogar."
        imgSrc={gato}
        imgAlt="Gato en adopción"
     
      />
    </div>    
  );
}

export default App
 
