import React from 'react';
import IconButton from '../components/IconButton';

export default {
  title: 'Components/IconButton',
  component: IconButton,
  tags: ['autodocs'], // 🔍 Activa la generación automática de documentación
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
        'notificationIcon'
      ],
      description: 'Nombre del ícono a mostrar',
    },
    size: {
      control: 'radio',
      options: ['small', 'medium', 'large', 'extraLarge', 'display'],
      description: 'Tamaño del botón',
    },
    variant: {
      control: 'text',
      description: 'Variante visual del botón (CSS class)',
    },
    disabled: {
      control: 'boolean',
      description: 'Desactiva el botón',
    },
    active: {
      control: 'boolean',
      description: 'Aplica estilo de botón activo',
    },
    onClick: { action: 'clicked' },
    children: {
      control: 'text',
      description: 'Texto opcional dentro del botón',
    },
  },
  args: {
    iconName: 'closeIcon',
    size: 'medium',
    variant: 'default',
    disabled: false,
    active: false,
    children: '',
  },
};

/**
 * Historia básica solo con ícono
 */
export const SoloIcono = {
  args: {
    children: '',
  },
};

/**


/**
 * Botón deshabilitado
 */
export const Deshabilitado = {
  args: {
    disabled: true,
  },
};

/**
 * Botón activo visualmente
 */
export const Activo = {
  args: {
    active: true,
  },
};
