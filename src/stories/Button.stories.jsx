import Button from '../components/Button';

// Configuración principal del componente
export default {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Componente Button con diferentes variantes, tamaños e iconos laterales.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['btn-primary', 'btn-secondary', 'btn-tertiary', 'btn-error', 'btn-text'],
      description: 'Variante visual del botón',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'btn-primary' },
      },
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
      description: 'Tamaño del botón',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'medium' },
      },
    },
    text: {
      control: { type: 'text' },
      description: 'Texto mostrado en el botón',
      table: {
        type: { summary: 'string' },
      },
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Estado deshabilitado del botón',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    onClick: {
      action: 'clicked',
      description: 'Función ejecutada al hacer clic',
      table: {
        type: { summary: 'function' },
      },
    },
  },
};

// Historia por defecto
export const Default = {
  args: {
    variant: 'btn-primary',
    size: 'medium',
    text: 'Button',
    disabled: false,
  },
};

// Variantes
export const Primary = {
  args: {
    variant: 'btn-primary',
    size: 'medium',
    text: 'Primary Button',
  },
};

export const Secondary = {
  args: {
    variant: 'btn-secondary',
    size: 'medium',
    text: 'Secondary Button',
  },
};

export const Tertiary = {
  args: {
    variant: 'btn-tertiary',
    size: 'medium',
    text: 'Tertiary Button',
  },
};

export const Error = {
  args: {
    variant: 'btn-error',
    size: 'medium',
    text: 'Error Button',
  },
};

export const Text = {
  args: {
    variant: 'btn-text',
    size: 'medium',
    text: 'Text Button',
  },
};

// Tamaños
export const Sizes = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <Button variant="btn-primary" size="small" text="Small" />
      <Button variant="btn-primary" size="medium" text="Medium" />
      <Button variant="btn-primary" size="large" text="Large" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Diferentes tamaños disponibles para el botón.',
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
  },
  parameters: {
    docs: {
      description: {
        story: 'Usa los controles de abajo para experimentar con diferentes configuraciones del botón.',
      },
    },
  },
};