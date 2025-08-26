import React from 'react'
import './Partners.css'
import Image from './Image'

function Partners({ partners = [] }) {
  return (
    <div className="partners-container">
      {partners.map((partner, index) => (
        <div className="partner" key={index}>
          <Image
            alt={partner.alt}
            src={partner.src}
            variant="img-partners"
          />
        </div>
      ))}
    </div>
  );
};

export default Partners;
