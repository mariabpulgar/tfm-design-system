import React from 'react';
import Button from './Button';
import Image from './Image';
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
  // clases del contenedor según tus estilos existentes
  const containerClass =
    `button-card ${orientation === 'vertical' ? 'simple-card-vertical' : 'simple-card-horizontal'}`;

  const imageWrapperClass =
    orientation === 'vertical' ? 'card-image-vertical' : 'card-image-horizontal';

  // variante del componente Image según orientación
  const imageVariant =
    orientation === 'vertical' ? 'img-buttonCard-vertical' : 'img-buttonCard-horizontal';

  return (
    <div className={containerClass}>
      <div className={imageWrapperClass}>
        <Image
          src={imageSrc}
          alt={imageAlt}
          variant={imageVariant}
        />
      </div>
      <div className="card-text-container">
        <div className="card-text">
          <h5>{title}</h5>
          <p>{description}</p>
        </div>
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
