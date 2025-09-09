// Hero.jsx - Versión con importación directa del SVG
import React from 'react'
import Button from '../molecules/Button'
import ellipse5 from '../../assets/ellipse5.svg'
import './Hero.css'

function Hero({
    imageSrc, // Imagen dinámica por prop
    smallTitle = "Lorem ipsum",
    mainTitle = "dolor sit amet, consectetur adipiscing elit",
    buttonText = "Button",
    onButtonClick = () => {}
}) {
    console.log('Hero imageSrc:', imageSrc);
    console.log('Ellipse5 mask imported:', ellipse5);
    
    return(
        <div className="hero-container">
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
                        variant="btn-primary"
                    />
                </div>
                <div className="hero-container-media">
                    {imageSrc ? (
                        <img 
                            src={imageSrc} 
                            alt="hero-image"
                            className="hero-image-with-mask"
                            style={{
                                WebkitMaskImage: `url(${ellipse5})`,
                                maskImage: `url(${ellipse5})`,
                                WebkitMaskRepeat: 'no-repeat',
                                maskRepeat: 'no-repeat',
                                WebkitMaskPosition: '50% 50%',
                                maskPosition: '50% 50%',
                                WebkitMaskSize: 'cover',
                                maskSize: 'cover'
                            }}
                        />
                    ) : (
                        <div 
                            className="placeholder-image"
                            style={{
                                WebkitMaskImage: `url(${ellipse5})`,
                                maskImage: `url(${ellipse5})`,
                                WebkitMaskRepeat: 'no-repeat',
                                maskRepeat: 'no-repeat',
                                WebkitMaskPosition: '50% 50%',
                                maskPosition: '50% 50%',
                                WebkitMaskSize: 'cover',
                                maskSize: 'cover'
                            }}
                        >
                            <div className="play-button">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M8 5v14l11-7z" fill="currentColor"/>
                                </svg>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Hero;