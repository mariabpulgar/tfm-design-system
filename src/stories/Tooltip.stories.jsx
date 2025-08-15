import React from 'react';
import Tooltip from '../components/Tooltip';
import '../components/Tooltip.css';
import { iconNames } from '../components/IconSelector';

export default {
  title: 'Components/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    controls: { expanded: true },
    docs: {
      description: {
        component:
          'Tooltip con disparador de ícono (IconSelector). Configurable en posición, trigger, ícono, tamaño y color. El ancho del texto está fijo en 320px.',
      },
    },
  },
  argTypes: {
    content: {
      control: 'text',
      description: 'Contenido del tooltip (string o ReactNode).',
    },
    position: {
      control: { type: 'select' },
      options: ['top', 'bottom', 'left', 'right'],
      description: 'Posición del tooltip relativa al ícono.',
    },
    trigger: {
      control: { type: 'select' },
      options: ['click', 'hover'],
      description: 'Evento que activa el tooltip.',
    },
    iconName: {
      control: { type: 'select' },
      options: iconNames,
      description: 'Nombre del ícono (desde IconSelector).',
    },
    iconSize: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
      description: 'Tamaño del ícono.',
    },
    iconColor: {
      control: 'color',
      description: 'Color del ícono.',
    },
    disabled: {
      control: 'boolean',
      description: 'Deshabilita la interacción del tooltip.',
    },
    className: {
      control: 'text',
      description: 'Clases CSS extra para el contenedor.',
    },
  },
};

const Template = (args) => <Tooltip {...args} />;

export const Default = Template.bind({});
Default.args = {
  content: 'Este es un tooltip con información útil para el usuario.',
  position: 'top',
  trigger: 'click',
  iconName: 'infoIcon',
  iconSize: 'medium',
  iconColor: '#FEFEFE',
  disabled: false,
};

export const TextoLargo = Template.bind({});
TextoLargo.args = {
  content:
    'Este es un tooltip con un texto más largo para comprobar que, aunque tenga un ancho fijo de 320px, el texto se distribuya correctamente en varias líneas y siga siendo legible.',
  position: 'top',
  trigger: 'click',
  iconName: 'infoIcon',
  iconSize: 'medium',
  iconColor: '#FEFEFE',
  disabled: false,
};

export const Playground = Template.bind({});
Playground.args = {
  content: 'Usa los controles para experimentar con el tooltip.',
  position: 'top',
  trigger: 'click',
  iconName: 'infoIcon',
  iconSize: 'medium',
  iconColor: '#FEFEFE',
  disabled: false,
  className: '',
};
