import React from 'react';
import PropTypes from 'prop-types';
import IconSelector from './IconSelector';
import './IconButton.css';


const IconButton = ({
  iconName = 'closeIcon',
  variant = 'default', // 'default' | 'primary' | 'secondary' | 'tertiary' | 'error' | 'text'
  size = 'medium',     // 'small' | 'medium' | 'large' | 'extraLarge' | 'display'
  disabled = false,
  active = false,
  onClick,
  className = '',
  children,
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

  return (
    <button
      className={combinedClassName}
      onClick={handleClick}
      disabled={disabled}
      aria-pressed={active || undefined}
      aria-label={children ? undefined : iconName.replace(/([A-Z])/g, ' $1').trim()}
      {...props}
    >
      <IconSelector
        name={iconName}
        size={iconSizeMapping[size]}
        color="currentColor" 
      />
      {children}
    </button>
  );
};

IconButton.propTypes = {
  iconName: PropTypes.string,
  variant: PropTypes.oneOf(['default', 'primary', 'secondary', 'tertiary', 'error', 'text']),
  size: PropTypes.oneOf(['small', 'medium', 'large', 'extraLarge', 'display']),
  disabled: PropTypes.bool,
  active: PropTypes.bool,
  onClick: PropTypes.func,
  className: PropTypes.string,
  children: PropTypes.node,
};

export default IconButton;
