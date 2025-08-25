import React from 'react';
import './App.css';
import SimpleCard from './components/SimpleCard';
import ButtonCard from './components/ButtonCard';


function App() {
  return (
    <div>
      <ButtonCard
        buttonSize="medium"
        buttonText="Ver más"
        buttonType="button"
        buttonVariant="btn-primary"
        description="Descripción corta de la card."
        imageAlt="placeholder"
        imageSrc="../src/assets/perrito.jpg"
        onButtonClick={() => {}}
        orientation="horizontal"
        title="Título de la card"
      />
    </div>    
  );
}

export default App
 
