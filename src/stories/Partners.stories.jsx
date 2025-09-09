// Partners.stories.jsx
import Partners from '../components/organisms/Partners';

// Ejemplos de imágenes (ajusta las rutas/extensiones a tu proyecto)
import LogoA from '../assets/Rectangle979.svg';
import LogoB from '../assets/Rectangle979.svg';
import LogoC from '../assets/Rectangle979.svg';
import LogoD from '../assets/Rectangle979.svg';

const meta = {
  title: 'Organisms/Partners',
  component: Partners,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Renderiza una fila de logos de partners. Recibe un array `partners` con objetos `{ src, alt }`.',
      },
    },
  },
  argTypes: {
    partners: {
      description:
        'Array de objetos con `{ src, alt }`. Cada elemento renderiza un logo dentro de `Image`.',
      control: { type: 'object' },
    },
  },
};
export default meta;

/** Historia base: 3 partners */
export const Basic = {
  args: {
    partners: [
      { src: LogoA, alt: 'Partner A' },
      { src: LogoB, alt: 'Partner B' },
      { src: LogoC, alt: 'Partner C' },
    ],
  },
  parameters: {
    docs: {
      description: {
        story: 'Ejemplo mínimo con tres logos.',
      },
    },
  },
};

/** Más elementos para probar overflow/espaciado */
export const ManyPartners = {
  args: {
    partners: [
      { src: LogoA, alt: 'Partner A' },
      { src: LogoB, alt: 'Partner B' },
      { src: LogoC, alt: 'Partner C' },
      { src: LogoD, alt: 'Partner D' },
      { src: LogoA, alt: 'Partner A (repetido)' },
      { src: LogoB, alt: 'Partner B (repetido)' },
    ],
  },
  parameters: {
    docs: {
      description: {
        story:
          'Lista más larga para validar el espaciado (`gap`) y comportamiento del contenedor.',
      },
    },
  },
};

/** Estado vacío (sin datos) */
export const Empty = {
  args: {
    partners: [],
  },
  parameters: {
    docs: {
      description: {
        story:
          'Útil para comprobar el estado cuando no hay partners. El componente no renderiza ítems.',
      },
    },
  },
};
