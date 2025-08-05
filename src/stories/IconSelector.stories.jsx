import React from 'react';
import IconSelector, { iconNames } from '../components/IconSelector';
import { iconSizeClasses } from '../tokens/icon-sizes';

export default {
  title: 'Components/IconSelector',
  component: IconSelector,
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
      control: { type: 'color' },
    },
  },
};

const Template = (args) => <IconSelector {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: 'checkedIcon',
  size: 'small',
  color: '#545454',
};


