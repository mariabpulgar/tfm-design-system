import React from 'react';
import ButtonGroup from '../components/ButtonGroup';

export default {
  title: 'Components/ButtonGroup',
  component: ButtonGroup,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    controls: { expanded: true },
    docs: {
      description: {
        component:
          'Molécula **ButtonGroup** que renderiza un conjunto de botones a partir de `items`. Cada ítem controla su `text`, `disabled`, `variant`, `size`, etc. Usa `equal` para anchos iguales.',
      },
    },
  },
  argTypes: {
    items: {
      control: 'object',
      description:
        'Lista de botones a renderizar. Cada item puede incluir `{ id, text, onClick, disabled, variant, size, type, className, isActive }`.',
      table: {
        type: { summary: 'Array<ButtonItem>' },
        defaultValue: { summary: '[{ text: "Left" }, { text: "Middle" }, { text: "Right" }]' },
      },
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
      description: 'Tamaño por defecto para todos los botones (si el ítem no lo sobrescribe).',
      table: { type: { summary: '"small" | "medium" | "large"' }, defaultValue: { summary: 'medium' } },
    },
    variant: {
      control: { type: 'select' },
      options: ['btn-primary', 'btn-secondary', 'btn-tertiary', 'btn-error', 'btn-text'],
      description: 'Variante por defecto para todos los botones (si el ítem no la sobrescribe).',
      table: { type: { summary: 'string' }, defaultValue: { summary: 'btn-primary' } },
    },
    equal: {
      control: 'boolean',
      description: 'Si es `true`, agrega la clase `equal` al contenedor para anchos iguales.',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    ariaLabel: {
      control: 'text',
      description: 'Etiqueta accesible para el grupo (`role="group"`).',
      table: { type: { summary: 'string' }, defaultValue: { summary: 'Button group' } },
    },
    onItemClick: {
      action: 'itemClick',
      description: 'Handler global: `(item, index, event) => void`.',
      table: { type: { summary: 'function' } },
    },
  },
  args: {
    // Defaults globales
    items: [
      { id: 'left', text: 'Left' },
      { id: 'middle', text: 'Middle' },
      { id: 'right', text: 'Right' },
    ],
    size: 'medium',
    variant: 'btn-primary',
    equal: false,
    ariaLabel: 'Button group',
  },
};

// Historia por defecto
export const Default = {
  name: 'Default',
};

// Igualar anchos
export const EqualWidths = {
  name: 'Equal widths',
  args: {
    equal: true,
  },
  parameters: {
    docs: { description: { story: 'Todos los botones ocupan el mismo ancho dentro del grupo.' } },
  },
};

// Estado activo en el botón del medio
export const ActiveMiddle = {
  name: 'Active middle',
  args: {
    items: [
      { id: 'left', text: 'Left' },
      { id: 'middle', text: 'Middle', isActive: true },
      { id: 'right', text: 'Right' },
    ],
  },
  parameters: {
    docs: { description: { story: 'Se marca el botón del medio con la clase `is-active`.' } },
  },
};

// Botón del medio deshabilitado
export const DisabledMiddle = {
  name: 'Disabled middle',
  args: {
    items: [
      { id: 'left', text: 'Left' },
      { id: 'middle', text: 'Middle', disabled: true },
      { id: 'right', text: 'Right' },
    ],
  },
};

// Variantes a nivel grupo (todos heredan)
export const SecondaryVariant = {
  name: 'Variant: Secondary',
  args: {
    variant: 'btn-secondary',
  },
};

// Tamaños
export const Sizes = {
  render: (args) => (
    <div style={{ display: 'grid', gap: 12 }}>
      <ButtonGroup {...args} size="small" />
      <ButtonGroup {...args} size="medium" />
      <ButtonGroup {...args} size="large" />
    </div>
  ),
  parameters: {
    docs: { description: { story: 'Comparativa de tamaños small, medium y large.' } },
  },
};

// Playground interactivo
export const Playground = {
  args: {
    items: [
      { id: 'left', text: 'Left' },
      { id: 'middle', text: 'Middle' },
      { id: 'right', text: 'Right' },
    ],
    equal: false,
  },
  parameters: {
    docs: {
      description: {
        story:
          'Usa los controles para modificar `items`, `size`, `variant`, `equal` y ver el resultado en tiempo real.',
      },
    },
  },
};
