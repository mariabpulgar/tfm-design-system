import React from 'react';
import PropTypes from 'prop-types';
import './SimpleCard.css';
import Image from '../atoms/Image';
import rectangle from '../../assets/Rectangle979.svg';

function SimpleCard({
  variant = 'vertical',            // 'horizontal' | 'vertical'
  title = 'Card',
  description = 'Lorem ipsum dolor sit amet.',
  imgSrc = rectangle,             // override opcional; por defecto placeholder
  imgAlt = 'placeholder',
}) {
  const isHorizontal = variant === 'horizontal';
  const imageVariant = isHorizontal
    ? 'img-simpleCard-horizontal'
    : 'img-simpleCard-vertical';

  return (
    <article className={isHorizontal ? 'simple-card-horizontal' : 'simple-card-vertical'}>
      {imgSrc && (
        <div className={isHorizontal ? 'card-image-horizontal' : 'card-image-vertical'}>
          <Image src={imgSrc} alt={imgAlt} variant={imageVariant} />
        </div>
      )}

      <div className="card-text">
        <h5>{title}</h5>
        <p>{description}</p>
      </div>
    </article>
  );
}

SimpleCard.propTypes = {
  variant: PropTypes.oneOf(['horizontal', 'vertical']),
  title: PropTypes.string.isRequired,
  // node permite strings o JSX (p.ej. <><strong>+100</strong> animales…</>)
  description: PropTypes.node.isRequired,
  imgSrc: PropTypes.string,
  imgAlt: PropTypes.string,
};

SimpleCard.defaultProps = {
  variant: 'vertical',
  title: 'Card',
  description: 'Lorem ipsum dolor sit amet.',
  imgSrc: rectangle,
  imgAlt: 'placeholder',
};

export default SimpleCard;
