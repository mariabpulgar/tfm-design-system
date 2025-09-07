import React from 'react';
import PropTypes from 'prop-types';
import IconSelector from '../atoms/IconSelector';
import './IconButton.css';


const IconButton = ({
  iconName = 'closeIcon',
  variant = 'default', // 'default' | 'primary' | 'secondary' | 'tertiary' | 'error' | 'text' | 'pagination'
  size = 'medium',     // 'small' | 'medium' | 'large' | 'extraLarge' | 'display'
  disabled = false,
  active = false,
  onClick,
  className = '',
  children,
  number,              // + 'pagination'
  ...props
}) => {
  // Tamaños -> clases de contenedor
  const containerSizes = {
    small: 'icon-button-container-small',
    medium: 'icon-button-container-medium',
    large: 'icon-button-container-large',
    extraLarge: 'icon-button-container-large', // reuse large
    display: 'icon-button-container-large',    // reuse large
  };

  // Variantes -> clases (usa tus .btn-*)
  const variants = {
    default: 'icon-button-default',
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    tertiary: 'btn-tertiary',
    error: 'btn-error',
    text: 'btn-text',
    pagination: 'btn-pagination', // + 'pagination'
  };

  // Tamaño del ícono relativo al botón
  const iconSizeMapping = {
    small: 'small',
    medium: 'small',
    large: 'medium',
    extraLarge: 'medium',
    display: 'medium',
  };

  const handleClick = (e) => {
    if (!disabled && onClick) onClick(e);
  };

  const containerClass = containerSizes[size] || containerSizes.medium;
  const variantClass = variants[variant] || variants.default;
  const activeClass = active ? 'icon-button-active' : '';
  const combinedClassName = `${containerClass} ${variantClass} ${activeClass} ${className}`.trim();

  const isNumberMode = typeof number !== 'undefined' && number !== null; // + 'pagination'

  return (
    <button
      className={combinedClassName}
      onClick={handleClick}
      disabled={disabled}
      aria-pressed={variant !== 'pagination' ? (active || undefined) : undefined}
      aria-current={isNumberMode && active ? 'page' : undefined}  // a11y para paginación
      aria-label={children ? undefined : iconName.replace(/([A-Z])/g, ' $1').trim()}
      {...props}
    >
    {isNumberMode ? (
      <span className="icon-button-number">{number}</span>
      ) : (
        <>
          <IconSelector
          name={iconName}
          size={iconSizeMapping[size]}
          color="currentColor"
        />
        {children}
      </>
    )}

    </button>
  );
};

IconButton.propTypes = {
  iconName: PropTypes.string,
  variant: PropTypes.oneOf(['default', 'primary', 'secondary', 'tertiary', 'error', 'text', 'pagination']),
  size: PropTypes.oneOf(['small', 'medium', 'large', 'extraLarge', 'display']),
  disabled: PropTypes.bool,
  active: PropTypes.bool,
  onClick: PropTypes.func,
  className: PropTypes.string,
  children: PropTypes.node,
  number: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

export default IconButton;
