import React from 'react';
import './Divider.css';

const Divider = ({
  variant = 'fullWidth',
  text,
  className = '',
  // Nueva prop para casos donde el divider tenga significado semántico
  role = 'separator',
  // Nueva prop para aria-label personalizado
  'aria-label': ariaLabel
}) => {
  const renderDivider = () => {
    switch (variant) {
      case 'fullWidth':
        return (
          <hr 
            className={`divider-full-width ${className}`}
            role="separator"
            aria-orientation="horizontal"
            aria-hidden="true"
          />
        );
        
      case 'center':
        return (
          <div 
            className={`divider-center ${className}`}
            role="separator"
            aria-orientation="horizontal"
            aria-label={ariaLabel || (text ? `Separador: ${text}` : 'Separador decorativo')}
          >
            <span aria-hidden="true">{text}</span>
          </div>
        );
        
      case 'chip':
        return (
          <div 
            className={`divider-chip ${className}`}
            role="separator"
            aria-orientation="horizontal"
            aria-label={ariaLabel || (text ? `Separador de sección: ${text}` : 'Separador decorativo')}
          >
            <span aria-hidden="true">{text}</span>
          </div>
        );
        
      default:
        return (
          <hr 
            className={`divider-full-width ${className}`}
            role="separator"
            aria-orientation="horizontal"
            aria-hidden="true"
          />
        );
    }
  };

  return renderDivider();
};

export default Divider;