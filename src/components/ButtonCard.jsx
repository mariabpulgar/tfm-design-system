import React from 'react';
import Button from './Button';
import './ButtonCard.css';
import rectangle from '../assets/Rectangle979.svg';

function ButtonCard({
  orientation = 'horizontal',          // 'horizontal' | 'vertical'
  title = 'Card',                      // texto del h5
  description = 'Lorem ipsum dolor sit amet.', // texto del p
  buttonText = 'Button',               // texto del botón
  onButtonClick = () => {},            // handler del botón
  buttonVariant = 'btn-primary',       // variant del botón
  buttonSize = 'medium',               // tamaño del botón
  buttonType = 'button',               // tipo del botón
  imageSrc = rectangle,                // imagen (opcional)
  imageAlt = 'placeholder'             // alt de la imagen
}) {
  const containerClass =
    `button-card ${orientation === 'vertical' ? 'simple-card-vertical' : 'simple-card-horizontal'}`;

  const imageWrapperClass =
    orientation === 'vertical' ? 'card-image-vertical' : 'card-image-horizontal';

  return (
    <div className={containerClass}>
      <div className={imageWrapperClass}>
        <img src={imageSrc} alt={imageAlt} />
      </div>

      <div className="card-text">
        <h5>{title}</h5>
        <p>{description}</p>

        <Button
          onClick={onButtonClick}
          size={buttonSize}
          text={buttonText}
          type={buttonType}
          variant={buttonVariant}
        />
      </div>
    </div>
  );
}

export default ButtonCard;
