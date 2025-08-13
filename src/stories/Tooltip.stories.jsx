// Tooltip.stories.jsx
import React from 'react';
import Tooltip from '../components/Tooltip';
import '../components/Tooltip.css';
import '../components/IconSelector';

// Usa tu IconSelector real para obtener la lista de nombres
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
          'Tooltip con disparador de ícono (IconSelector). Configurable en posición, trigger, ícono, tamaño y color. El contenido acepta texto o ReactNode.',
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
      description: 'Tamaño del ícono (coincide con tus iconSizeClasses).',
    },
    iconColor: {
      control: 'color',
      description: 'Color del ícono (usa currentColor en SVG).',
    },
    disabled: {
      control: 'boolean',
      description: 'Deshabilita la interacción del tooltip.',
    },
    className: {
      control: 'text',
      description: 'Clases CSS extra para el contenedor.',
    },
    // Ocultamos cualquier prop interna no relevante
    IconComponent: { table: { disable: true } },
  },
};

const Template = (args) => (
  <div
    style={{
      padding: 100,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: 220,
    }}
  >
    <Tooltip {...args} />
  </div>
);

// ---- Story: Default ----
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

// ---- Story: Playground ----
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
Playground.storyName = 'Playground Interactivo';
