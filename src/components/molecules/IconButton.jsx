import React from 'react';
import PropTypes from 'prop-types';
import IconSelector from '../atoms/IconSelector';
import './IconButton.css';

const IconButton = ({
  iconName = 'closeIcon',
  variant = 'default',
  size = 'medium',
  disabled = false,
  active = false,
  onClick,
  className = '',
  children,
  number,
  ariaLabel, // Nueva prop para aria-label personalizado
  ...props
}) => {
  // Tamaños -> clases de contenedor
  const containerSizes = {
    small: 'icon-button-container-small',
    medium: 'icon-button-container-medium',
    large: 'icon-button-container-large',
    extraLarge: 'icon-button-container-large',
    display: 'icon-button-container-large',
  };

  // Variantes -> clases
  const variants = {
    default: 'icon-button-default',
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    tertiary: 'btn-tertiary',
    error: 'btn-error',
    text: 'btn-text',
    pagination: 'btn-pagination',
  };

  // Tamaño del ícono relativo al botón
  const iconSizeMapping = {
    small: 'small',
    medium: 'small',
    large: 'medium',
    extraLarge: 'medium',
    display: 'medium',
  };

  // Función para generar aria-label automático mejorado
  const generateAriaLabel = () => {
    if (ariaLabel) return ariaLabel;
    
    if (typeof number !== 'undefined' && number !== null) {
      return `Página ${number}${active ? ' (página actual)' : ''}`;
    }
    
    if (children) {
      return children.toString();
    }
    
    // Convertir camelCase a palabras legibles
    const iconLabel = iconName
      .replace(/([A-Z])/g, ' $1')
      .replace(/Icon$/, '')
      .trim()
      .toLowerCase();
    
    // Mapeo de iconos comunes a etiquetas más descriptivas
    const iconLabels = {
      'close': 'Cerrar',
      'plus': 'Agregar',
      'status': 'Estado',
      'info': 'Información',
      'warning': 'Advertencia',
      'checked': 'Completado',
      'notification': 'Notificaciones',
      'download1': 'Descargar',
      'upload1': 'Subir archivo',
      'home2': 'Inicio',
    };
    
    return iconLabels[iconLabel] || `Botón ${iconLabel}`;
  };

  // Manejo de eventos de teclado
  const handleKeyDown = (e) => {
    if (disabled) return;
    
    // Enter o Espacio activan el botón
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      if (onClick) onClick(e);
    }
  };

  const handleClick = (e) => {
    if (!disabled && onClick) onClick(e);
  };

  const containerClass = containerSizes[size] || containerSizes.medium;
  const variantClass = variants[variant] || variants.default;
  const activeClass = active ? 'icon-button-active' : '';
  const combinedClassName = `${containerClass} ${variantClass} ${activeClass} ${className}`.trim();

  const isNumberMode = typeof number !== 'undefined' && number !== null;

  return (
    <button
      className={combinedClassName}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      disabled={disabled}
      type="button" // Explícitamente tipo button para evitar submit accidental
      tabIndex={disabled ? -1 : 0} // Remover del tab order cuando está disabled
      aria-pressed={variant !== 'pagination' && !isNumberMode ? (active || undefined) : undefined}
      aria-current={isNumberMode && active ? 'page' : undefined}
      aria-label={generateAriaLabel()}
      aria-disabled={disabled} // Mejor soporte para screen readers
      role={variant === 'pagination' ? 'button' : undefined} // Explícito para paginación
      {...props}
    >
      {isNumberMode ? (
        <span 
          className="icon-button-number"
          aria-hidden="true" // El número es decorativo, el aria-label da el contexto
        >
          {number}
        </span>
      ) : (
        <>
          <IconSelector
            name={iconName}
            size={iconSizeMapping[size]}
            color="currentColor"
            aria-hidden="true" // Los íconos son decorativos
          />
          {children && (
            <span aria-hidden="true">{children}</span> // Texto también decorativo si hay aria-label
          )}
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
  ariaLabel: PropTypes.string, // Nueva prop
};

export default IconButton;