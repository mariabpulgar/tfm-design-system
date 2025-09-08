import React from 'react';
import Chip from '../components/molecules/Chip';
import '../components/molecules/Chip.css';
import '../App.css'

export default {
  title: 'Molecules/Chip',
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
  args: {
    title: 'Etiqueta personalizada',
  },
};
