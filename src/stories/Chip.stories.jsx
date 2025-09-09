import React from 'react';
import Chip from '../components/Chip';

export default {
  title: 'Components/Chip',
  component: Chip,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    controls: { expanded: true },
    docs: {
      description: {
        component:
          'Chip con texto personalizable y un ícono de cierre fijo (closeIcon). Usado para mostrar etiquetas removibles.',
      },
    },
  },
  argTypes: {
    title: {
      control: 'text',
      description: 'Texto que se muestra dentro del chip.',
    },
  },
};

export const Default = {
  args: {
    title: 'Removable chip',
  },
};

export const CustomTitle = {
  name: 'Etiqueta personalizada',
  args: {
    title: 'Etiqueta personalizada',
  },
};
