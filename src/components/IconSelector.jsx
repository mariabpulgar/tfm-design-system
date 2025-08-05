//Se crea el componente IconSelector con el fin de seleccionar dinamicamente los iconos. Al importar los iconos al final se debe escribir ?react para que los iconos puedan ser renderizados. Luego de importar el icono se anade en la const icons para que pueda ser reutilizado posteriormente. 

import React from 'react';
import StatusIcon from '../icons/Status.svg?react';
import PlusIcon from '../icons/Plus.svg?react';
import CheckedIcon from '../icons/Check-1.svg?react';
import InfoIcon from '../icons/Info.svg?react';
import WarningIcon from '../icons/Warning.svg?react';
import CloseIcon from '../icons/Close.svg?react';
import NotificationIcon from '../icons/Notification.svg?react';
import './IconSelector.css';

const icons = {
  statusIcon: StatusIcon,
  plusIcon: PlusIcon,
  checkedIcon: CheckedIcon,
  infoIcon: InfoIcon,
  warningIcon: WarningIcon,
  closeIcon: CloseIcon,
  notificationIcon: NotificationIcon,
};

export default function IconSelector({ name, color = 'var(--gray-darker)', size = 'regular', className = '', ...props }) {
  const IconComponent = icons[name];

  if (!IconComponent) {
    console.warn(`Icon "${name}" not found.`);
    return null;
  }

  // Mapeo de tamaños a clases CSS existentes
  const sizeClasses = {
    small: 'icon-selector-small',
    medium: 'icon-selector-medium', 
    regular: 'icon-selector-regular',
    large: 'icon-selector-large',
    display: 'icon-selector-display'
  };

  // Obtener la clase de tamaño
  const sizeClass = sizeClasses[size] || 'icon-selector-regular';

  // Combinar clases CSS
  const combinedClassName = `${sizeClass} ${className}`.trim();

  return (
    <IconComponent
      className={combinedClassName}
      style={{ 
        color,
        ...props.style
      }}
      {...props}
    />
  );
}