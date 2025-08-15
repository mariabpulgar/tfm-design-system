import React from 'react';
import PropTypes from 'prop-types';
import './ButtonGroup.css';
import Button from './Button';


 
function ButtonGroup({
  items = [],               // [{ id?, text, onClick?, disabled?, variant?, size?, type?, className?, isActive? }]
  size = 'medium',          // tamaño por defecto para todos
  variant = 'btn-primary',  // variante por defecto para todos
  className = '',           // clases extra para el contenedor
  ariaLabel = 'Button group',
  equal = false,            // si true, agrega la clase "equal" al contenedor
  onItemClick,              // handler global opcional (btn, idx, event)
}) {
  return (
    <div
      className={`button-group-container ${equal ? 'equal' : ''} ${className}`.trim()}
      role="group"
      aria-label={ariaLabel}
    >
      {items.map((btn, idx) => {
        const {
          id,
          text,
          onClick,
          disabled = false,
          variant: itemVariant,
          size: itemSize,
          type = 'button',
          className: itemClassName = '',
          isActive = false,
          ...rest
        } = btn;

        return (
          <Button
            key={id ?? idx}
            className={`btn--in-group ${isActive ? 'is-active' : ''} ${itemClassName}`.trim()}
            isGroup
            size={itemSize ?? size}
            variant={itemVariant ?? variant}
            text={text}
            disabled={disabled}
            type={type}
            onClick={(e) => {
              onClick?.(e);                 // click del botón
              onItemClick?.(btn, idx, e);   // click global
            }}
            {...rest}
          />
        );
      })}
    </div>
  );
}

ButtonGroup.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      text: PropTypes.string.isRequired,
      onClick: PropTypes.func,
      disabled: PropTypes.bool,
      variant: PropTypes.string,
      size: PropTypes.oneOf(['small', 'medium', 'large']),
      type: PropTypes.oneOf(['button', 'submit', 'reset']),
      className: PropTypes.string,
      isActive: PropTypes.bool,
    })
  ),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  variant: PropTypes.string,
  className: PropTypes.string,
  ariaLabel: PropTypes.string,
  equal: PropTypes.bool,
  onItemClick: PropTypes.func,
};

export default ButtonGroup;
