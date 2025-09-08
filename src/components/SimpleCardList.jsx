// src/components/SimpleCardList.jsx
import React from 'react';
import PropTypes from 'prop-types';
import './SimpleCardList.css';
import SimpleCard from './SimpleCard';

function SimpleCardList({
  items,
  variant = 'vertical',        // 'vertical' | 'horizontal'
  className = '',
  emptyMessage = 'Sin elementos para mostrar.',
}) {
  // Fallback de ejemplo (opcional)
  const fallback = [
    { title: 'Card 1', description: 'Lorem ipsum dolor sit amet.', imgSrc: '/src/assets/Rectangle979.svg', imgAlt: 'Card 1' },
    { title: 'Card 2', description: 'Lorem ipsum dolor sit amet.', imgSrc: '/src/assets/Rectangle979.svg', imgAlt: 'Card 2' },
    { title: 'Card 3', description: 'Lorem ipsum dolor sit amet.', imgSrc: '/src/assets/Rectangle979.svg', imgAlt: 'Card 3' },
    { title: 'Card 4', description: 'Lorem ipsum dolor sit amet.', imgSrc: '/src/assets/Rectangle979.svg', imgAlt: 'Card 4' },
    { title: 'Card 5', description: 'Lorem ipsum dolor sit amet.', imgSrc: '/src/assets/Rectangle979.svg', imgAlt: 'Card 5' },
    { title: 'Card 6', description: 'Lorem ipsum dolor sit amet.', imgSrc: '/src/assets/Rectangle979.svg', imgAlt: 'Card 6' },
  ];

  // Usa items si vienen; si no, usa fallback
  const data = Array.isArray(items) && items.length ? items : fallback;

  if (!data.length) {
    return <div className="simple-card-list-empty">{emptyMessage}</div>;
  }

  return (
    <div className={`simple-card-list-container ${className}`}>
      <div className="simple-card-list-grid">
        {data.map((item, idx) => (
          <SimpleCard
            key={idx}
            title={item.title}
            description={item.description}
            imgSrc={item.imgSrc}         
            imgAlt={item.imgAlt}        
            variant={variant}
          />
        ))}
      </div>
    </div>
  );
}

SimpleCardList.propTypes = {
  /** Array de datos para cada SimpleCard */
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      description: PropTypes.node.isRequired, // acepta string o JSX
      imgSrc: PropTypes.string,   // opcional si tu SimpleCard no exige imagen
      imgAlt: PropTypes.string,
    })
  ),
  /** Orientación de cada SimpleCard */
  variant: PropTypes.oneOf(['vertical', 'horizontal']),
  /** Clase extra para el contenedor */
  className: PropTypes.string,
  /** Mensaje si no hay datos */
  emptyMessage: PropTypes.string,
};

export default SimpleCardList;
