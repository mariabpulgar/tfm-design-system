// src/stories/IconButton.stories.jsx
import React from 'react';
import IconButton from '../components/IconButton';
import '../components/SearchBar.css'; // <-- asegura .btn-* en Storybook
import '../components/IconButton.css';

export default {
  title: 'Components/IconButton',
  component: IconButton,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    controls: { expanded: true },
    docs: {
      description: {
        component:
          'Botón icónico que compone clases de tamaño (`icon-button-container-*`) y variantes visuales (`.btn-*` o `icon-button-default`).',
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
    },  // <-- pagination nuevo
    
    size: {
      control: 'inline-radio',
      options: ['small', 'medium', 'large', 'extraLarge', 'display'],
      description: 'Tamaño del botón.',
      table: { defaultValue: { summary: 'medium' } },
    },
    variant: {
      control: 'inline-radio',
      options: ['default', 'primary', 'secondary', 'tertiary', 'error', 'text', 'pagination'],
      description:
        'Variante visual (incluye `.btn-pagination` para números).',
      table: { defaultValue: { summary: 'default' } },
    },
    disabled: {
      control: 'boolean',
      description: 'Desactiva el botón.',
    },
    active: {
      control: 'boolean',
      description: 'Estado visual activo (si tu CSS lo utiliza).',
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
    number: undefined, // <-- pagination nuevo
  },
};

/** Solo ícono (variante por defecto) */
export const SoloIcono = {
  args: {
    children: '',
  },
};

/** Con texto junto al ícono */
export const ConTexto = {
  args: {
    children: 'Acción',
    iconName: 'plusIcon',
    variant: 'primary',
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

/** Tamaños */
export const Small = {
  args: {
    size: 'small',
    variant: 'primary',
    iconName: 'checkedIcon',
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
};

export const Activo = {
  args: {
    active: true,
    variant: 'secondary',
  },
};

export const Paginacion = {
  args: {
    variant: 'pagination',
    number: 1,
    active: true,
  },
};
