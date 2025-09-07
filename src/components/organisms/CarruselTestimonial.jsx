// CarruselTestimonial.jsx
import React from 'react';
import './CarruselTestimonial.css';
import Testimonial from '../molecules/Testimonial';
import IconButton from '../molecules/IconButton';

function CarruselTestimonial({ children, items = [] }) {
  const handlePrev = () => {};
  const handleNext = () => {};

  const hasChildren = React.Children.count(children) > 0;
  const content = hasChildren
    ? children
    : items.map((t, i) => (
        <Testimonial
          key={i}
          imageSrc={t.imageSrc}
          altText={t.altText}
          text={t.text}
          userName={t.userName}
        />
      ));

  return (
    <div className="carrusel-testimonial-container">
      <div className="left-button">
        <IconButton
          iconName="dropLeftIcon"
          onClick={handlePrev}
          size="medium"
          variant="outline"
          aria-label="Ver testimonio anterior"
        />
      </div>

      <div className="testimonials">
        {content}
      </div>

      <div className="right-button">
        <IconButton
          iconName="dropRightIcon"
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
