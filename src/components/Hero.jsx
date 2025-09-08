import React from 'react'
import Button from './Button'
import './Hero.css'
import Perrito from '../assets/ellipse5.svg'

function Hero({imageSrc = Perrito}){
    return(
        <div className="hero-section">

            <div className="hero-container-text">
                <h5 className="hero-title-h5">Lorem ipsum</h5>
                <h1 className="hero-title-h1">dolor sit amet, consectetur adipiscing elit</h1>
                <Button
                iconColor="currentColor"
                iconPosition="left"
                iconSize="medium"
                leftIconName="dropLeftIcon"
                onClick={() => {}}
                rightIconName="dropRightIcon"
                showLeftIcon
                showRightIcon
                size="large"
                text="Button"
                type="button"
                variant="btn-tertiary"
                />
            </div>
            <div className="hero-container-media">
               <img src={imageSrc} alt="image-hero"/>
            </div>
        </div>
    );
};

export default Hero;