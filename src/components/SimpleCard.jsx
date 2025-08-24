import React from 'react';
import './SimpleCard.css';
import Image from './Image';
import rectangle from '../assets/Rectangle979.svg';

function SimpleCard({
  variant = 'vertical',                // 'horizontal' | 'vertical'
  title = 'Card',
  description = 'Lorem ipsum dolor sit amet.',
  imgSrc = rectangle,                    // permite override; por defecto usa el placeholder
  imgAlt = 'placeholder',
}) {
  const isHorizontal = variant === 'horizontal';

  // Variante de imagen según la variante de la card
  const imageVariant = isHorizontal
    ? 'img-simpleCard-horizontal'
    : 'img-simpleCard-vertical';

  return (
    <div className={isHorizontal ? 'simple-card-horizontal' : 'simple-card-vertical'}>
      <div className={isHorizontal ? 'card-image-horizontal' : 'card-image-vertical'}>
        <Image
          src={imgSrc}
          alt={imgAlt}
          variant={imageVariant}
        />
      </div>

      <div className="card-text">
        <h5>{title}</h5>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default SimpleCard;
