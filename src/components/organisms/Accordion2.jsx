import { useState } from 'react';
import PropTypes from 'prop-types';
import './Accordion2.css';
import Button from '../molecules/Button';

const AccordionItem = ({ title, content, isOpen, onToggle, index }) => {
  const contentId = `accordion-content-${index}`;
  const headerId = `accordion-header-${index}`;

  return (
    <div className={`accordion-item ${isOpen ? 'open' : ''}`}>
      <Button
        type="button"
        variant="btn-text"
        size="large"
        className="accordion-header"
        text={<span className="accordion-title">{title}</span>}
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={contentId}
        id={headerId}
        iconSide="right"
        iconName={isOpen ? 'minusIcon' : 'plusIcon'}
        iconSize="medium"
        iconColor="var(--gray-darker)"
      />

      <div
        className="accordion-content"
        id={contentId}
        role="region"
        aria-labelledby={headerId}
      >
        <p className="accordion-text">{content}</p>
      </div>
    </div>
  );
};

AccordionItem.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
};

const Accordion2 = ({ 
  items = [
    {
      title: 'Item 1',
      content: 'Lorem ipsum dolor sit amet consectetur adipiscing elit luctus, nullam tempor duis potenti litora justo.',
    },
    {
      title: 'Item 2', 
      content: 'Lorem ipsum dolor sit amet consectetur adipiscing elit luctus, nullam tempor duis potenti litora justo.',
    },
    {
      title: 'Item 3',
      content: 'Lorem ipsum dolor sit amet consectetur adipiscing elit luctus, nullam tempor duis potenti litora justo.',
    },
  ],
  allowMultiple = false,
  defaultOpenIndex = null,
  className = '',
}) => {
  const [openIndices, setOpenIndices] = useState(() => {
    if (allowMultiple) {
      return defaultOpenIndex !== null ? [defaultOpenIndex] : [];
    }
    return defaultOpenIndex;
  });

  const toggleItem = (index) => {
    if (allowMultiple) {
      setOpenIndices((prev) => 
        prev.includes(index) 
          ? prev.filter(i => i !== index)
          : [...prev, index]
      );
    } else {
      setOpenIndices((prev) => (prev === index ? null : index));
    }
  };

  const isItemOpen = (index) => {
    if (allowMultiple) {
      return openIndices.includes(index);
    }
    return openIndices === index;
  };

  return (
    <div className={`accordion-container ${className}`.trim()}>
      <div className="accordion-wrapper">
        <div className="accordion-inner">
          {items.map((item, index) => (
            <AccordionItem
              key={index}
              index={index}
              title={item.title}
              content={item.content}
              isOpen={isItemOpen(index)}
              onToggle={() => toggleItem(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

Accordion2.propTypes = {
  /** Array de objetos con title y content para cada item del acordeón */
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    })
  ),
  /** Permite que múltiples items estén abiertos simultáneamente */
  allowMultiple: PropTypes.bool,
  /** Índice del item que debe estar abierto por defecto */
  defaultOpenIndex: PropTypes.number,
  /** Clase CSS adicional para el contenedor principal */
  className: PropTypes.string,
};

export default Accordion2;