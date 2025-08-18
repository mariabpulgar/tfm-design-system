import React from 'react';
import './App.css'
import ButtonCard from './components/ButtonCard';


function App() {
  return (
    <div>
      <ButtonCard
          buttonSize="medium"
          buttonText="Ver"
          buttonType="button"
          buttonVariant="btn-primary"
          description="Descripción corta de la card."
          imageAlt="placeholder"
          imageSrc="/src/assets/Rectangle979.svg"
          onButtonClick={() => {}}
          orientation="vertical"
          title="Título de la card"
        />
    </div>    
  );
}

export default App
 
