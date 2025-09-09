import React from 'react';
import './App.css';
import Checkbox from './components/atoms/Checkbox';
import Home from './components/templates/home';
import {useState} from 'react';
import StatusLabel from './components/molecules/StatusLabel';
import ButtonCard from './components/molecules/ButtonCard';
import Accordion2 from './components/organisms/Accordion2';
import CardList from './components/organisms/CardList';


function App() {
  const [isAccepted, setIsAccepted] = useState(false);

  const handleAcceptChange = (e) => {
    setIsAccepted(e.target.checked);
  };


  return (
    <div>

        <Accordion2
          className=""
          defaultOpenIndex={null}
          items={[
            {
              content: 'Lorem ipsum dolor sit amet consectetur adipiscing elit luctus, nullam tempor duis potenti litora justo.',
              title: 'Item 1'
            },
            {
              content: 'Lorem ipsum dolor sit amet consectetur adipiscing elit luctus, nullam tempor duis potenti litora justo.',
              title: 'Item 2'
            },
            {
              content: 'Lorem ipsum dolor sit amet consectetur adipiscing elit luctus, nullam tempor duis potenti litora justo.',
              title: 'Item 3'
            }
          ]}
        />
      <CardList
        cardType="button"
        orientation="vertical"
        buttonText="Ver más"
        items={[
          { title: "Producto Premium", description: "Descripción premium.", imageSrc: "/src/assets/Rectangle979.svg", imageAlt: "Producto premium" },
          { title: "Servicio Profesional", description: "Descripción servicio.", imageSrc: "/src/assets/Rectangle979.svg", imageAlt: "Servicio profesional" },
          { title: "Solución Integral", description: "Descripción solución.", imageSrc: "/src/assets/Rectangle979.svg", imageAlt: "Solución integral" }
        ]}
      />


      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <StatusLabel />
        <StatusLabel variant="active" text="Activo" />
        <StatusLabel variant="warning" text="Advertencia" />
        <StatusLabel variant="errorLabel" text="Error" />
      </div>
      <ButtonCard
        buttonSize="medium"
        buttonText="Ver más"
        buttonType="button"
        buttonVariant="btn-primary"
        description="Descripción corta de la card."
        imageAlt="placeholder"
        imageSrc="/src/assets/Rectangle979.svg"
        onButtonClick={() => {}}
        orientation="horizontal"
        title="Título de la card"
      />

      <h2>Términos y Condiciones</h2>
      <Checkbox
        id="accept-terms"
        label="Acepto los términos y condiciones"
        checked={isAccepted}
        onChange={handleAcceptChange}
      />
      <Home></Home>

    </div>    
  );
};

export default App
 
