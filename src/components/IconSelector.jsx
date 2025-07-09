//Se crea el componente IconSelector con el fin de seleccionar dinamicamente los iconos. Al importar los iconos al final se debe escribir ?react para que los iconos puedan ser renderizados. 
import React from 'react';
import StatusIcon  from '../icons/Status.svg?react'
import PlusIcon  from '../icons/Plus.svg?react'
import CheckedIcon from '../icons/Check.svg?react'
import InfoIcon from '../icons/Info.svg?react'
import WarningIcon from '../icons/Warning.svg?react'
import CloseIcon from '../icons/Close.svg?react'
import typography from '../tokens/typography?react';

const icons = {
    statusIcon: StatusIcon,
    plusIcon: PlusIcon,
    checkedIcon: CheckedIcon,
    infoIcon: InfoIcon,
    warningIcon: WarningIcon,
    closeIcon: CloseIcon,
};
export default function IconSelector({name, size = typography.small.fontSize, color = 'currentColor', ...props }){
    const IconComponent = icons[name];

    if(!IconComponent){
        console.warn(`Icon "${name}" not found.`);
        return null;
    }
    return (
        <IconComponent
            style={{
                width: size,
                height: size,
                color,
            }}
            {...props}

        />
    );
}