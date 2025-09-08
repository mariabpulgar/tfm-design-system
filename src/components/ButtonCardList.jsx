import React from 'react';
import PropTypes from 'prop-types';
import '../components/ButtonCardList.css';
import ButtonCard from '../components/ButtonCard';

/**
 * Lista de ButtonCard en grid responsive
 */
function ButtonCardList({
  items,
  orientation = 'vertical',      // 'vertical' | 'horizontal'  (pasa a cada ButtonCard)
  className = '',
  emptyMessage = 'Sin elementos para mostrar.',
}) {
  // Fallback opcional por si no pasan items
  const fallback = [
    {
      title: 'Card 1',
      description: 'Lorem ipsum dolor sit amet.',
      imageSrc: '/src/assets/Rectangle979.svg',
      imageAlt: 'Card 1',
      buttonText: 'Ver más',
    },
    {
      title: 'Card 2',
      description: 'Lorem ipsum dolor sit amet.',
      imageSrc: '/src/assets/Rectangle979.svg',
      imageAlt: 'Card 2',
      buttonText: 'Ver más',
    },
    {
      title: 'Card 3',
      description: 'Lorem ipsum dolor sit amet.',
      imageSrc: '/src/assets/Rectangle979.svg',
      imageAlt: 'Card 3',
      buttonText: 'Ver más',
    },

  ];

  const data = Array.isArray(items) && items.length ? items : fallback;

  if (!data.length) {
    return <div className="button-card-list-empty">{emptyMessage}</div>;
  }

  const containerMod =
    orientation === 'horizontal' ? 'is-horizontal' : 'is-vertical';

  return (
    <div className={`button-card-list-container ${containerMod} ${className}`}>
      <div className="button-card-list-grid">
        {data.map((item, idx) => (
          <ButtonCard
            key={idx}
            orientation={orientation}
            title={item.title}
            description={item.description}
            imageSrc={item.imageSrc}
            imageAlt={item.imageAlt}
            buttonText={item.buttonText}
            buttonVariant={item.buttonVariant}
            buttonSize={item.buttonSize}
            buttonType={item.buttonType}
            onButtonClick={item.onButtonClick}
          />
        ))}
      </div>
    </div>
  );
}

ButtonCardList.propTypes = {
  /** Array de datos para cada ButtonCard */
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      // acepta string o JSX
      description: PropTypes.oneOfType([PropTypes.string, PropTypes.node])
        .isRequired,
      imageSrc: PropTypes.string,
      imageAlt: PropTypes.string,
      buttonText: PropTypes.string,
      buttonVariant: PropTypes.string,
      buttonSize: PropTypes.oneOf(['small', 'medium', 'large']),
      buttonType: PropTypes.oneOf(['button', 'submit', 'reset']),
      onButtonClick: PropTypes.func,
    })
  ),
  /** Orientación de cada ButtonCard */
  orientation: PropTypes.oneOf(['vertical', 'horizontal']),
  /** Clase extra para el contenedor */
  className: PropTypes.string,
  /** Mensaje si no hay datos */
  emptyMessage: PropTypes.string,
};

export default ButtonCardList;
