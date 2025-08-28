import React from 'react'
import Button from './Button'
import './Hero.css'

function Hero({ 
    imageSrc, // Removemos el default porque debe ser una imagen real
    smallTitle = "Lorem ipsum",
    mainTitle = "dolor sit amet, consectetur adipiscing elit",
    buttonText = "Button",
    onButtonClick = () => {}
}) {
    return(
        <div className="hero-section">
            <div className="hero-container-text">
                <h5 className="hero-title-h5">{smallTitle}</h5>
                <h1 className="hero-title-h1">{mainTitle}</h1>
                <Button
                    iconColor="currentColor"
                    iconPosition="left"
                    iconSize="medium"
                    leftIconName="dropLeftIcon"
                    onClick={onButtonClick}
                    rightIconName="dropRightIcon"
                    showLeftIcon
                    showRightIcon
                    size="large"
                    text={buttonText}
                    type="button"
                    variant="btn-tertiary"
                />
            </div>
            <div className="hero-container-media">
                {imageSrc ? (
                    <img src={imageSrc} alt="hero-image"/>
                ) : (
                    <div className="placeholder-image">
                        <div className="play-button">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M8 5v14l11-7z" fill="currentColor"/>
                            </svg>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Hero;
