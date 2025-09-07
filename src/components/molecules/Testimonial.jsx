import React from 'react';
import './Testimonial.css';
import Image from '../atoms/Image';

function Testimonial({ imageSrc, altText, text, userName }) {
  return (
    <div className="testimonial-container">
      <div className="testimonial-image">
        <Image
          alt={altText}
          src={imageSrc}
          variant="img-testimonial"
        />
      </div>
      <div className="testimonial-text">
        <p>{text}</p>
        <h6>{userName}</h6>
      </div>
    </div>
  );
}

export default Testimonial;
