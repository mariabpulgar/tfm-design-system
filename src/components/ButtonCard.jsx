import React from 'react'
import Button from './Button'
import './ButtonCard.css';
import rectangle from '../assets/Rectangle979.svg';

function ButtonCard(){
    return(
        <div className="button-card simple-card-horizontal">
            <div className="card-image-horiontal">
                <img src={rectangle} alt="placeholder"></img>
            </div>
            <div className="card-text">
                <h5>Card</h5>
                <p>Lorem ipsum dolor sit amet.</p>
                    <Button
                    onClick={() => {}}
                    size="medium"
                    text="Button"
                    type="button"
                    variant="btn-primary"
                    />
            </div>
       
        </div>
    );
}

export default ButtonCard;