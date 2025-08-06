import React from 'react';
import IconSelector, { iconNames } from '../components/IconSelector';
import { iconSizeClasses } from '../tokens/icon-sizes';

// Configuración de metadatos para Storybook
export default {
  title: 'Components/IconSelector',
  component: IconSelector,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Componente para renderizar iconos SVG dinámicamente con diferentes tamaños y colores.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    name: {
      control: { type: 'select' },
      options: iconNames,
    },
    size: {
      control: { type: 'select' },
      options: Object.keys(iconSizeClasses), // <-- Opciones de tamaño dinámicas
      description: 'Elige un tamaño predefinido para el icono.',
    },
    color: {
      control: 'color',
      description: 'Color del icono',
      defaultValue: 'var(--gray-darker)',
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'regular', 'large', 'display'],
      description: 'Tamaño del icono',
      defaultValue: 'regular',
    },
    className: {
      control: 'text',
      description: 'Clases CSS adicionales',
    },
  },
};

// Template base para las historias
const Template = (args) => <IconSelector {...args} />;

// Historia por defecto
export const Default = Template.bind({});
Default.args = {
  name: 'checkedIcon',
  size: 'small',
  color: '#545454',
};


