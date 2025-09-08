import React from 'react';
import NavBar from '../components/NavBar.jsx';

// Forzamos URL de los SVG para evitar conflictos con SVGR/loader.
import logoUrl from '../assets/Rectangle982.svg?url';
import dividerUrl from '../assets/Vector148.svg?url';

export default {
  title: 'Components/NavBar',
  component: NavBar,
  tags: ['autodocs'], // habilita Autodocs en Docs tab
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Barra de navegación principal con submenú de adopción y consideraciones de accesibilidad (focus, ARIA, teclado).',
      },
    },
  },
  argTypes: {
    imageSrc: {
      control: 'text',
      description: 'Ruta de la imagen del logo',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Rectangle982.svg' },
      },
    },
    vectorSrc: {
      control: 'text',
      description: 'Ruta del ícono divisor entre elementos de navegación',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Vector148.svg' },
      },
    },
  },
};

// ÚNICA story (Default)
export const Default = {
  args: {
    imageSrc: logoUrl,
    vectorSrc: dividerUrl,
  },
};
