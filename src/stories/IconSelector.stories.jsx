// src/stories/IconSelector.stories.jsx
import IconSelector, { iconNames } from '../components/atoms/IconSelector.jsx';
import '../components/atoms/IconSelector.css';

export default {
  title: 'Atoms/IconSelector',
  component: IconSelector,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    controls: { expanded: true },
    docs: {
      description: {
        component:
          'Selector de íconos SVG cargados dinámicamente con `import.meta.glob`. Soporta **tokens de tamaño** (`small`, `medium`, `large`, `extraLarge`, `display`) o **tamaño numérico en px**, y color CSS (`currentColor`, hex, `var(--token)`, etc.).',
      },
      source: { state: 'open' }, // bloque de código visible por defecto
    },
  },
  argTypes: {
    name: {
      control: { type: 'select' },
      options: iconNames, // lista generada desde el componente
      description: 'Nombre del ícono a renderizar. Debe estar presente en `iconNames`.',
      table: { category: 'Contenido' },
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large', 'extraLarge', 'display'],
      description:
        'Tamaño del ícono. Acepta tokens (`small`…`display`). También puedes pasar un **número** (px): ver historia "NumericSize".',
      table: { category: 'Estilo' },
    },
    color: {
      control: 'text',
      description: 'Color CSS del ícono (p. ej., `currentColor`, `#333`, `var(--ciam-normal)`).',
      table: { category: 'Estilo' },
    },
    className: {
      control: 'text',
      description: 'Clases CSS adicionales para el SVG.',
      table: { category: 'Estilo' },
    },
  },
};

/** Story principal con controles */
export const Playground = {
  args: {
    name: iconNames?.[0] ?? 'infoIcon',
    size: 'medium',
    color: 'currentColor',
    className: '',
  },
};

/** Variantes por tamaño (snapshot friendly) */
export const Small = {
  name: 'small',
  args: {
    name: 'infoIcon',
    size: 'small',
  },
};

export const Medium = {
  name: 'medium',
  args: {
    name: 'checkIcon',
    size: 'medium',
  },
};

export const Large = {
  name: 'large',
  args: {
    name: 'warningIcon',
    size: 'large',
  },
};

export const ExtraLarge = {
  name: 'extraLarge',
  args: {
    name: 'notificationIcon',
    size: 'extraLarge',
  },
};

export const Display = {
  name: 'display',
  args: {
    name: 'settingsIcon',
    size: 'display',
  },
};

/** Ejemplo de tamaño numérico (px). Se desactiva el control de `size` aquí para evitar conflicto con el select. */
export const NumericSize = {
  args: {
    name: 'homeIcon',
    size: 32, // px
    color: 'currentColor',
  },
  parameters: {
    controls: { include: ['name', 'color', 'className'] }, // oculta `size` aquí
    docs: {
      description: {
        story:
          'Ejemplo usando **tamaño numérico** (`size: 32`) en píxeles. El componente acepta tanto tokens como números.',
      },
    },
  },
};

/** Override de color */
export const Colored = {
  args: {
    name: 'starIcon',
    size: 'large',
    color: 'var(--ciam-normal)', // o '#FFB703', 'rebeccapurple', etc.
  },
};
