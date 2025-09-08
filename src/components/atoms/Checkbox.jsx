import React from 'react';
import PropTypes from 'prop-types';
import './Checkbox.css';

const Checkbox = ({
  id,
  label,
  checked,
  onChange,
  disabled,
  'aria-describedby': ariaDescribedBy,
  'aria-label': ariaLabel,
  ...props
}) => {
  const handleKeyDown = (event) => {
    // Permitir activar el checkbox con Espacio o Enter
    if ((event.key === ' ' || event.key === 'Enter') && !disabled) {
      event.preventDefault();
      if (onChange) {
        // Crear un evento sintético similar al onChange nativo
        const syntheticEvent = {
          target: {
            checked: !checked,
            id: id
          }
        };
        onChange(syntheticEvent);
      }
    }
  };

  return (
    <div className="checkbox-container">
      <input
        type="checkbox"
        className="checkbox-input"
        id={id}
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        onKeyDown={handleKeyDown}
        // Atributos de accesibilidad
        aria-checked={checked}
        aria-disabled={disabled}
        aria-describedby={ariaDescribedBy}
        aria-label={ariaLabel || (label ? undefined : 'Checkbox')}
        tabIndex={disabled ? -1 : 0}
        role="checkbox"
        {...props}
      />
      {label && (
        <label 
          htmlFor={id} 
          className="checkbox-label"
          // Prevenir que el label interfiera con la navegación por teclado
          onClick={(e) => {
            if (disabled) {
              e.preventDefault();
            }
          }}
        >
          {label}
        </label>
      )}
    </div>
  );
};

Checkbox.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
  checked: PropTypes.bool,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  'aria-describedby': PropTypes.string,
  'aria-label': PropTypes.string,
};

Checkbox.defaultProps = {
  checked: false,
  disabled: false,
};

export default Checkbox;