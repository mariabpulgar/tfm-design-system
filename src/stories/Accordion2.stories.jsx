
import Accordion2 from '../components/organisms/Accordion2';
import '../App.css';
import '../components/organisms/Accordion2.css';

const meta = {
  title: 'Organisms/Accordion2',
  component: Accordion2,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Accordion accesible que utiliza el componente **Button** con la variante **btn-text**. ' +
          'Cada encabezado es un único `<button>` con `aria-expanded` y `aria-controls`, e ícono dinámico (plus/minus) a la derecha.',
      },
      source: {
        state: 'open', // bloque de código visible por defecto
      },
    },
  },

  // Controles de historia (no tocan la API del componente; afectan el contenedor)
  argTypes: {
    containerMaxWidth: {
      name: 'Container maxWidth',
      description:
        'Ancho máximo del contenedor de la historia (no del componente). Útil para testear comportamiento responsivo.',
      control: { type: 'number', min: 280, max: 960, step: 10 },
      table: {
        category: 'Story Controls',
        defaultValue: { summary: 560 },
      },
    },
    showBorder: {
      name: 'Show wrapper border',
      description:
        'Dibuja un borde alrededor del contenedor para visualizar padding y límites.',
      control: { type: 'boolean' },
      table: {
        category: 'Story Controls',
        defaultValue: { summary: false },
      },
    },
    padding: {
      name: 'Wrapper padding',
      description: 'Espaciado interno del contenedor.',
      control: { type: 'text' },
      table: {
        category: 'Story Controls',
        defaultValue: { summary: '0' },
      },
    },
  },
  args: {
    containerMaxWidth: 560,
    showBorder: false,
    padding: '0',
  },
};
export default meta;

/**
 * Plantilla de render que envuelve el componente para poder controlar
 * ancho/padding/borde desde los args de Storybook sin modificar Accordion2.
 */
const Wrapper = ({ containerMaxWidth, showBorder, padding, children }) => (
  <div
    style={{
      maxWidth: containerMaxWidth,
      width: '100%',
      margin: '2rem auto',
      border: showBorder ? '1px solid #E5E7EB' : 'none',
      padding,
      borderRadius: showBorder ? 8 : 0,
      boxSizing: 'border-box',
    }}
  >
    {children}
  </div>
);

/** Default */
export const Default = {
  render: (args) => (
    <Wrapper {...args}>
      <Accordion2 />
    </Wrapper>
  ),
  args: {
    containerMaxWidth: 560,
    showBorder: false,
    padding: '0',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Render por defecto, con el contenedor centrado y ancho máximo de 560px.',
      },
    },
  },
};

/** Narrow (simula móvil estrecho) */
export const Narrow = {
  render: (args) => (
    <Wrapper {...args}>
      <Accordion2 />
    </Wrapper>
  ),
  args: {
    containerMaxWidth: 360,
    showBorder: false,
    padding: '0',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Versión en un contenedor más estrecho (≈360px) para observar el comportamiento responsivo.',
      },
    },
  },
};

/** WithBorder (para ver límites del wrapper) */
export const WithBorder = {
  render: (args) => (
    <Wrapper {...args}>
      <Accordion2 />
    </Wrapper>
  ),
  args: {
    containerMaxWidth: 560,
    showBorder: true,
    padding: '12px',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Dibuja un borde y padding en el contenedor para inspeccionar alineaciones y espaciados.',
      },
    },
  },
};

/** Wide (máximo recomendado en diseño actual) */
export const Wide = {
  render: (args) => (
    <Wrapper {...args}>
      <Accordion2 />
    </Wrapper>
  ),
  args: {
    containerMaxWidth: 560, // igual a Default, mantenemos por claridad editorial
    showBorder: false,
    padding: '0',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Misma anchura máxima de 560px (layout recomendado), útil como referencia de diseño.',
      },
    },
  },
};
