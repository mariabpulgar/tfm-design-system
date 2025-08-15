import React from 'react';
import Button from '../components/Button';

// Configuración principal del componente
export default {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    controls: { expanded: true },
    docs: {
      description: {
        component:
          'Componente Button con diferentes variantes, tamaños e iconos laterales. Usa la prop `isGroup` para ocultar los íconos cuando el botón se use dentro de un ButtonGroup.',
      },
    },
  },
  argTypes: {
    // Contenido
    text: {
      control: 'text',
      description: 'Texto mostrado en el botón',
      table: { type: { summary: 'string' } },
    },

    // Apariencia
    variant: {
      control: { type: 'select' },
      options: ['btn-primary', 'btn-secondary', 'btn-tertiary', 'btn-error', 'btn-text'],
      description: 'Variante visual del botón',
      table: { type: { summary: 'string' }, defaultValue: { summary: 'btn-primary' } },
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
      description: 'Tamaño del botón',
      table: { type: { summary: 'string' }, defaultValue: { summary: 'medium' } },
    },

    // Comportamiento/estado
    disabled: {
      control: 'boolean',
      description: 'Estado deshabilitado del botón',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    isGroup: {
      control: 'boolean',
      description:
        'Si es `true`, el botón se usa dentro de un ButtonGroup y oculta los íconos laterales.',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },

    // Eventos
    onClick: {
      action: 'clicked',
      description: 'Función ejecutada al hacer clic',
      table: { type: { summary: 'function' } },
    },

    // Props HTML (passthrough)
    type: {
      control: { type: 'select' },
      options: ['button', 'submit', 'reset'],
      description: 'Atributo HTML `type` del botón.',
      table: { type: { summary: 'string' }, defaultValue: { summary: 'button' } },
    },
    className: {
      control: 'text',
      description: 'Clases CSS adicionales para personalización.',
      table: { type: { summary: 'string' } },
    },
  },
  args: {
    // Defaults globales para el Playground y las historias que no los sobrescriban
    variant: 'btn-primary',
    size: 'medium',
    text: 'Button',
    disabled: false,
    isGroup: false, // por defecto false
    type: 'button',
  },
};

// Historia por defecto
export const Default = {
  name: 'Default (con iconos)',
};

// Variantes
export const Primary = {
  args: { variant: 'btn-primary', size: 'medium', text: 'Primary Button' },
};

export const Secondary = {
  args: { variant: 'btn-secondary', size: 'medium', text: 'Secondary Button' },
};

export const Tertiary = {
  args: { variant: 'btn-tertiary', size: 'medium', text: 'Tertiary Button' },
};

export const Error = {
  args: { variant: 'btn-error', size: 'medium', text: 'Error Button' },
};

export const Text = {
  args: { variant: 'btn-text', size: 'medium', text: 'Text Button' },
};

// Tamaños
export const Sizes = {
  render: (args) => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <Button {...args} variant="btn-primary" size="small" text="Small" />
      <Button {...args} variant="btn-primary" size="medium" text="Medium" />
      <Button {...args} variant="btn-primary" size="large" text="Large" />
    </div>
  ),
  parameters: {
    docs: { description: { story: 'Diferentes tamaños disponibles para el botón.' } },
  },
};

// En ButtonGroup (oculta íconos)
export const InGroup = {
  name: 'En ButtonGroup (sin iconos)',
  args: {
    text: 'En grupo',
    isGroup: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          'Simula el uso del botón dentro de un ButtonGroup. Con `isGroup` en `true`, los íconos laterales no se renderizan.',
      },
    },
  },
};

// Playground interactivo
export const Playground = {
  args: {
    variant: 'btn-primary',
    size: 'medium',
    text: 'Playground Button',
    disabled: false,
    isGroup: false,
  },
  parameters: {
    docs: {
      description: {
        story:
          'Usa los controles de la derecha para experimentar con diferentes configuraciones del botón.',
      },
    },
  },
};
