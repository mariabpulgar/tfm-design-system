import React from 'react';
import Dropdown from '../components/Dropdown';

export default {
  title: 'Components/Dropdown',
  component: Dropdown,
  tags: ['autodocs'],
    parameters: {
    docs: {
      description: {
        component: 'Menú desplegable que muestra una lista de opciones al hacer clic o pulsar sobre un botón. Permite al usuario seleccionar una opción de forma compacta, ahorrando espacio en la interfaz.',
      },
    },
  },
  argTypes: {
    title: {
      control: 'text',
      description: 'El texto que se muestra en el botón del dropdown.',
    },
    items: {
      control: 'object',
      description: 'Un array de objetos con las propiedades `label` y `link` para cada elemento del menú.',
    },
    mode: { 
      control: { 
      type: 'select' },
      options: ['single', 'multiple']
    },
      defaultSelected: { 
        control: 'object',
        description: 'Solo para mode="multiple": ids/labels seleccionados por defecto'
      },
      onChange: { 
        action: 'changed' 
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

export const WithCheckboxes = Template.bind({});
WithCheckboxes.args = {
  title: 'Selecciona opciones',
  mode: 'multiple',
  items: [
    { id: 'opt-1', label: 'Opción 01' },
    { id: 'opt-2', label: 'Opción 02' },
    { id: 'opt-3', label: 'Opción 3' },
  ],
  defaultSelected: ['opt-2'],
};

WithCheckboxes.storyName = "Dropdown con checkboxes";