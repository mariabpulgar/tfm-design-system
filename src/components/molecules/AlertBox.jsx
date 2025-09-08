import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './AlertBox.css';
import IconSelector from '../atoms/IconSelector';
import IconButton from '../molecules/IconButton';

// Configuración de las variantes
const VARIANT_CONFIG = {
  error: {
    iconName: 'warningIcon',
    role: 'alert',
    ariaLive: 'assertive',
  },
  warning: {
    iconName: 'warningIcon',
    role: 'alert',
    ariaLive: 'assertive',
  },
  success: {
    iconName: 'checkIcon',
    role: 'status',
    ariaLive: 'polite',
  },
  info: {
    iconName: 'infoIcon',
    role: 'status',
    ariaLive: 'polite',
  },
};

function AlertBox({
  variant = 'info',
  title,
  message,
  dismissible = true,
  onClose,
  className = '',
  iconName: iconNameOverride,
  iconColor: iconColorOverride,
  ...props
}) {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  const config = VARIANT_CONFIG[variant] || VARIANT_CONFIG.info;

  const handleClose = (e) => {
    setIsVisible(false);
    if (onClose) onClose(e);
  };

  return (
    <div 
      className={`alert-box alert-box--${variant} ${className}`.trim()}
      role={config.role}
      aria-live={config.ariaLive}
      {...props}
    >
      <div className="alert-box__content">
        <div className="alert-box__icon">
          <IconSelector
            name={iconNameOverride || config.iconName}
            size="display"
            color={iconColorOverride || `var(--alert-${variant}-icon)`}
          />
        </div>
        
        <div className="alert-box__text">
          {title && <div className="alert-box__title">{title}</div>}
          {message && <div className="alert-box__message">{message}</div>}
        </div>
      </div>

      {dismissible && (
        <div className="alert-box__close">
          <IconButton
            iconName="closeIcon"
            variant="default"
            size="large"
            onClick={handleClose}
            ariaLabel="Cerrar alerta"
          />
        </div>
      )}
    </div>
  );
}

AlertBox.propTypes = {
  /** Variante de la alerta que define el color y comportamiento */
  variant: PropTypes.oneOf(['error', 'warning', 'success', 'info']),
  
  /** Título principal de la alerta */
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  
  /** Mensaje descriptivo de la alerta */
  message: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  
  /** Si la alerta puede ser cerrada por el usuario */
  dismissible: PropTypes.bool,
  
  /** Función que se ejecuta cuando se cierra la alerta */
  onClose: PropTypes.func,
  
  /** Clases CSS adicionales */
  className: PropTypes.string,
  
  /** Sobrescribe el icono por defecto de la variante */
  iconName: PropTypes.string,
  
  /** Sobrescribe el color del icono */
  iconColor: PropTypes.string,
};

export default AlertBox;