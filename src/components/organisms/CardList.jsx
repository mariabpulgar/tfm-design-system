// src/components/CardList.jsx
import React from 'react';
import PropTypes from 'prop-types';
import SimpleCard from '../molecules/SimpleCard';
import ButtonCard from '../molecules/ButtonCard';
import './CardList.css';

function CardList({
  cardType = 'button',         // 'button' | 'simple'
  orientation = 'vertical',    // 'vertical' | 'horizontal'
  buttonText = 'Ver más',      // usado por ButtonCard (puede ser sobreescrito por item.buttonText)
  items,
  emptyMessage = 'Sin elementos para mostrar.',
}) {
  const fallback = [
    { title: 'Título de la card 1', description: 'Descripción corta 1.', imageSrc: '/src/assets/Rectangle979.svg', imageAlt: 'placeholder' },
    { title: 'Título de la card 2', description: 'Descripción corta 2.', imageSrc: '/src/assets/Rectangle979.svg', imageAlt: 'placeholder' },
    { title: 'Título de la card 3', description: 'Descripción corta 3.', imageSrc: '/src/assets/Rectangle979.svg', imageAlt: 'placeholder' },
  ];

  const data = Array.isArray(items) && items.length ? items : fallback;

  if (!data.length) {
    return <div className="card-list-empty">{emptyMessage}</div>;
  }

  return (
    <div className="card-list-container">
      <div className="card-list-grid">
        {data.map((item, idx) => {
          const commonProps = {
            title: item.title,
            description: item.description,
            imageSrc: item.imageSrc,
            imageAlt: item.imageAlt,
            orientation,
          };

          if (cardType === 'simple') {
            return <SimpleCard key={idx} {...commonProps} />;
          }

          // Variante ButtonCard (usar valores globales con posibilidad de override por item)
          return (
            <ButtonCard
              key={idx}
              {...commonProps}
              buttonText={item.buttonText ?? buttonText}
              buttonVariant={item.buttonVariant ?? 'btn-primary'}
              buttonSize={item.buttonSize ?? 'medium'}
              buttonType={item.buttonType ?? 'button'}
              onButtonClick={item.onButtonClick ?? (() => console.log('Card click:', item.title))}
            />
          );
        })}
      </div>
    </div>
  );
}

CardList.propTypes = {
  cardType: PropTypes.oneOf(['button', 'simple']),
  orientation: PropTypes.oneOf(['horizontal', 'vertical']),
  buttonText: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      imageSrc: PropTypes.string,
      imageAlt: PropTypes.string,
      // overrides opcionales para ButtonCard:
      buttonText: PropTypes.string,
      buttonVariant: PropTypes.string,
      buttonSize: PropTypes.string,
      buttonType: PropTypes.string,
      onButtonClick: PropTypes.func,
    })
  ),
  emptyMessage: PropTypes.string,
};

export default CardList;
