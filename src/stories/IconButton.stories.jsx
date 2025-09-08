// src/stories/IconButton.stories.jsx
import React from 'react';
import IconButton from '../components/molecules/IconButton';
import '../components/molecules/SearchBar.css';
import '../App.css'
import '../components/molecules/IconButton.css';

export default {
  title: 'Molecules/IconButton',
  component: IconButton,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    controls: { expanded: true },
    docs: {
      description: {
        component:
          'Botón icónico accesible con área de toque adecuada (min 44x44px), soporte completo de teclado (Enter/Espacio), estados visibles y aria-labels descriptivos.',
      },
    },
  },
  argTypes: {
    iconName: {
      control: 'select',
      options: [
        'closeIcon',
        'plusIcon',
        'statusIcon',
        'infoIcon',
        'warningIcon',
        'checkedIcon',
        'notificationIcon',
        'download1Icon',
        'upload1Icon',
        'home2Icon',
      ],
      description: 'Nombre del ícono a mostrar.',
    },
    
    number: {
      control: { type: 'number', min: 1, max: 99, step: 1 },
      description: 'Número para la variante de paginación.',
    },
    
    ariaLabel: {
      control: 'text',
      description: 'Etiqueta accesible personalizada. Si no se proporciona, se genera automáticamente.',
    },
    
    size: {
      control: 'inline-radio',
      options: ['small', 'medium', 'large', 'extraLarge', 'display'],
      description: 'Tamaño del botón. Todos garantizan área de toque mínima.',
      table: { defaultValue: { summary: 'medium' } },
    },
    
    variant: {
      control: 'inline-radio',
      options: ['default', 'primary', 'secondary', 'tertiary', 'error', 'text', 'pagination'],
      description: 'Variante visual con estados hover/focus/active visibles.',
      table: { defaultValue: { summary: 'default' } },
    },
    
    disabled: {
      control: 'boolean',
      description: 'Desactiva el botón y lo remueve del tab order.',
    },
    
    active: {
      control: 'boolean',
      description: 'Estado visual activo con soporte aria-pressed.',
    },
    
    onClick: { action: 'clicked' },
    
    children: {
      control: 'text',
      description: 'Texto opcional dentro del botón.',
    },
  },
  args: {
    iconName: 'closeIcon',
    size: 'medium',
    variant: 'default',
    disabled: false,
    active: false,
    children: '',
    number: undefined,
    ariaLabel: '',
  },
};

/** Solo ícono (variante por defecto) */
export const SoloIcono = {
  args: {
    children: '',
  },
  parameters: {
    docs: {
      description: {
        story: 'Botón con solo ícono. El aria-label se genera automáticamente como "Cerrar".',
      },
    },
  },
};

/** Con texto junto al ícono */
export const ConTexto = {
  args: {
    children: 'Acción',
    iconName: 'plusIcon',
    variant: 'primary',
  },
  parameters: {
    docs: {
      description: {
        story: 'Botón con texto. El aria-label será "Acción".',
      },
    },
  },
};

/** Aria-label personalizado */
export const AriaLabelPersonalizado = {
  args: {
    iconName: 'closeIcon',
    variant: 'error',
    ariaLabel: 'Cerrar diálogo de confirmación',
  },
  parameters: {
    docs: {
      description: {
        story: 'Botón con aria-label personalizado para mayor especificidad.',
      },
    },
  },
};

/** Variantes visuales */
export const Primario = {
  args: {
    variant: 'primary',
    iconName: 'plusIcon',
  },
};

export const Secundario = {
  args: {
    variant: 'secondary',
    iconName: 'download1Icon',
  },
};

export const Terciario = {
  args: {
    variant: 'tertiary',
    iconName: 'infoIcon',
    children: 'Info',
  },
};

export const Error = {
  args: {
    variant: 'error',
    iconName: 'closeIcon',
  },
};

export const Texto = {
  args: {
    variant: 'text',
    iconName: 'upload1Icon',
    children: 'Subir',
  },
};

/** Tamaños con área de toque */
export const Small = {
  args: {
    size: 'small',
    variant: 'primary',
    iconName: 'checkedIcon',
  },
  parameters: {
    docs: {
      description: {
        story: 'Tamaño small (32x32px mínimo) mantiene área de toque accesible.',
      },
    },
  },
};

export const Large = {
  args: {
    size: 'large',
    variant: 'secondary',
    iconName: 'notificationIcon',
  },
};

export const ExtraLarge = {
  args: {
    size: 'extraLarge',
    variant: 'primary',
    iconName: 'statusIcon',
  },
};

export const Display = {
  args: {
    size: 'display',
    variant: 'tertiary',
    iconName: 'warningIcon',
    children: 'Alerta',
  },
};

/** Estados */
export const Deshabilitado = {
  args: {
    disabled: true,
    variant: 'primary',
  },
  parameters: {
    docs: {
      description: {
        story: 'Estado disabled con cursor not-allowed y removido del tab order.',
      },
    },
  },
};

export const Activo = {
  args: {
    active: true,
    variant: 'secondary',
  },
  parameters: {
    docs: {
      description: {
        story: 'Estado activo con aria-pressed="true".',
      },
    },
  },
};

/** Paginación */
export const Paginacion = {
  args: {
    variant: 'pagination',
    number: 1,
    active: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Botón de paginación con aria-current="page" cuando está activo.',
      },
    },
  },
};

export const PaginacionInactiva = {
  args: {
    variant: 'pagination',
    number: 2,
    active: false,
  },
};

