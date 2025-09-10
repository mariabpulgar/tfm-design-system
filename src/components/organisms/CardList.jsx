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
  className = '',
  // 👇 NUEVO: callback para propagar el clic del botón al padre
  onClickItemButton,
}) {
  // Fallback con imageSrc/imageAlt (para Storybook o casos sin datos)
  const fallback = [
    {
      id: 'fallback-1',
      title: 'Título de la card 1',
      description: 'Descripción corta 1.',
      imageSrc: '/src/assets/Rectangle979.svg',
      imageAlt: 'placeholder'
    },
    {
      id: 'fallback-2',
      title: 'Título de la card 2',
      description: 'Descripción corta 2.',
      imageSrc: '/src/assets/Rectangle979.svg',
      imageAlt: 'placeholder'
    },
    {
      id: 'fallback-3',
      title: 'Título de la card 3',
      description: 'Descripción corta 3.',
      imageSrc: '/src/assets/Rectangle979.svg',
      imageAlt: 'placeholder'
    },
  ];

  const data = Array.isArray(items) && items.length ? items : fallback;

  if (!data.length) {
    return <div className="card-list-empty">{emptyMessage}</div>;
  }

  // Cambia la clase del grid según la orientación
  const gridClass =
    orientation === 'horizontal' ? 'card-list-grid-horizontal' : 'card-list-grid';

  return (
    <div
      className={`card-list-container ${className}`.trim()}
      data-orientation={orientation}
    >
      <div className={gridClass}>
        {data.map((item, idx) => {
          const key = item.id ?? idx;

          // Props comunes que incluyen imagen
          const commonProps = {
            title: item.title,
            description: item.description,
            imageSrc: item.imageSrc,
            imageAlt: item.imageAlt,
            orientation,
          };

          if (cardType === 'simple') {
            return <SimpleCard key={key} {...commonProps} />;
          }

          // 🔗 Manejo de clic: prioriza item.onButtonClick; si no, usa onClickItemButton(item)
          const handleClick =
            item.onButtonClick ??
            (onClickItemButton
              ? () => onClickItemButton(item)
              : () => console.log('Card click:', item.title));

          return (
            <ButtonCard
              key={key}
              {...commonProps}
              buttonText={item.buttonText ?? buttonText}
              buttonVariant={item.buttonVariant ?? 'btn-primary'}
              buttonSize={item.buttonSize ?? 'medium'}
              buttonType={item.buttonType ?? 'button'}
              onButtonClick={handleClick}
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
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      title: PropTypes.string.isRequired,
      description: PropTypes.string,
      imageSrc: PropTypes.string,
      imageAlt: PropTypes.string,
      // overrides opcionales para ButtonCard:
      buttonText: PropTypes.string,
      buttonVariant: PropTypes.string,
      buttonSize: PropTypes.string,
      buttonType: PropTypes.string,
      onButtonClick: PropTypes.func, // se respeta si viene en el item
    })
  ),
  emptyMessage: PropTypes.string,
  className: PropTypes.string,
  // 👇 NUEVO: callback general para los botones de las cards
  onClickItemButton: PropTypes.func,
};

export default CardList;
