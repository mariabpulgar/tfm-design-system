import React from 'react';
import PropTypes from 'prop-types';
import IconSelector from './IconSelector';
import './IconButton.css' // Ajusta la ruta según tu estructura

const IconButton = ({
  iconName = 'closeIcon',
  variant = 'default',
  size = 'medium',
  disabled = false,
  active = false,
  onClick,
  className = '',
  children,
  ...props
}) => {
  // Mapeo de tamaños a clases CSS
  const containerSizes = {
    small: 'icon-button-container-small',
    medium: 'icon-button-container-medium',
    large: 'icon-button-container-large',
  };

  // Mapeo de variantes a clases CSS
  const variants = {
    default: 'icon-button-default',
    // Agrega más variantes aquí si es necesario
  };

  // Mapeo del tamaño del botón al tamaño del ícono
  const iconSizeMapping = {
    small: 'small',
    medium: 'small',
    large: 'medium',
  };

  const handleClick = (e) => {
    if (!disabled && onClick) {
      onClick(e);
    }
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
  variant: PropTypes.oneOf(['default']), // Agrega más si defines más variantes
  size: PropTypes.oneOf(['small', 'medium', 'large', 'extraLarge', 'display']),
  disabled: PropTypes.bool,
  active: PropTypes.bool,
  onClick: PropTypes.func,
  className: PropTypes.string,
  children: PropTypes.node,
};

export default IconButton;
