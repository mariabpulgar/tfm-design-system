import React from 'react';
import './CarruselTestimonial.css';
import Testimonial from './Testimonial.jsx';
import IconButton from './IconButton.jsx';
import Rectangle979 from '../assets/Rectangle979.svg'; // ← importa el asset

function CarruselTestimonial() {
  const handlePrev = () => {
    // lógica de moverse a la izquierda (cuando la agregues)
  };

  const handleNext = () => {
    // lógica de moverse a la derecha (cuando la agregues)
  };

  return (
    <div className="carrusel-testimonial-container">
      <div className="left-button">
        <IconButton
          iconName="dropLeftIcon"     // ← usa un nombre válido
          onClick={handlePrev}
          size="medium"
          variant="outline"
          aria-label="Ver testimonio anterior"
        />
      </div>

      <div className="testimonials">
        <Testimonial
          altText="Foto del usuario"
          imageSrc={Rectangle979}     // ← pasa el import, no la ruta "/src/..."
          text="“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.”"
          userName="User name"
        />
        <Testimonial
          altText="Foto del usuario"
          imageSrc={Rectangle979}
          text="“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.”"
          userName="User name"
        />
        <Testimonial
          altText="Foto del usuario"
          imageSrc={Rectangle979}
          text="“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.”"
          userName="User name"
        />
      </div>

      <div className="right-button">
        <IconButton
          iconName="dropRightIcon"    // ← usa un nombre válido
          onClick={handleNext}
          size="medium"
          variant="outline"
          aria-label="Ver siguiente testimonio"
        />
      </div>
    </div>
  );
}

export default CarruselTestimonial;
