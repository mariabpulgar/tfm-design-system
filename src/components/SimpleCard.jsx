import React from 'react';
import './SimpleCard.css';
import rectangle from '../assets/Rectangle979.svg';

function SimpleCard({ variant = 'horizontal', title = 'Card', description = 'Lorem ipsum dolor sit amet.' }) {
  const isHorizontal = variant === 'horizontal';
  
  return (
    <div className={isHorizontal ? "simple-card-horizontal" : "simple-card-vertical"}>
      <div className={isHorizontal ? "card-image-horizontal" : ""}>
        <img src={rectangle} alt="placeholder"/>
      </div>
      <div className="card-text">
        <h5>{title}</h5>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default SimpleCard;