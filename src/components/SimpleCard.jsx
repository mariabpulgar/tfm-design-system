import React from 'react';
import './SimpleCard.css';
import rectangle from '../assets/Rectangle979.svg';

function SimpleCard(){
  return (
    <div className="simple-card-horizontal">
      <div className="card-image-horizontal">
        <img src={rectangle} alt="placeholder"/>
      </div>
      <div className="card-text">
        <h5>Card</h5>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>
    </div>
  );
}
export default SimpleCard;
