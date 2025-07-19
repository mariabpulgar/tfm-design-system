//Se crea el componente IconSelector con el fin de seleccionar dinamicamente los iconos. Al importar los iconos al final se debe escribir ?react para que los iconos puedan ser renderizados. 
import React from 'react';
import StatusIcon  from '../icons/Status.svg?react'
import PlusIcon  from '../icons/Plus.svg?react'
import CheckedIcon from '../icons/Check-1.svg?react'
import InfoIcon from '../icons/Info.svg?react'
import WarningIcon from '../icons/Warning.svg?react'
import CloseIcon from '../icons/Close.svg?react'
import './IconSelector.css';

const icons = {
    statusIcon: StatusIcon,
    plusIcon: PlusIcon,
    checkedIcon: CheckedIcon,
    infoIcon: InfoIcon,
    warningIcon: WarningIcon,
    closeIcon: CloseIcon,
};
export default function IconSelector({ name, color = 'currentColor', ...props }) {
  const IconComponent = icons[name];

  if (!IconComponent) {
    console.warn(`Icon "${name}" not found.`);
    return null;
  }

  return (
    <IconComponent
      className="icon-selector"
      style={{ color }} // solo color dinámico
      {...props}
    />
  );
}