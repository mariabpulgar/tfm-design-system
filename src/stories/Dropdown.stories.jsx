import React from 'react';
import Dropdown from '../components/Dropdown';

export default {
  title: 'Components/Dropdown',
  component: Dropdown,
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
      description: 'El texto que se muestra en el botón del dropdown.',
    },
    items: {
      control: 'object',
      description: 'Un array de objetos con las propiedades `label` y `link` para cada elemento del menú.',
    },
  },
};

const Template = (args) => <Dropdown {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Choose',
  items: [
    { label: 'Opción 01'},
    { label: 'Opción 02'},
    { label: 'Opción 03'},
  ],
};