import Accordion2 from '../components/organisms/Accordion2';
import '../App.css';
import '../components/organisms/Accordion2.css';
import './Accordion2.stories.css'; // CSS específico para Storybook

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
          'Cada encabezado es un único `<button>` con `aria-expanded` y `aria-controls`, e ícono dinámico (plus/minus) a la derecha. ' +
          'Soporta contenido personalizable, comportamiento de acordeón simple o múltiple, y estado inicial configurable.',
      },
      source: {
        state: 'open', // bloque de código visible por defecto
      },
    },
  },

  argTypes: {
    items: {
      name: 'Items',
      description: 'Array de objetos con title y content para cada item del acordeón',
      control: { type: 'object' },
      table: {
        type: { 
          summary: 'Array<{title: string, content: string}>' 
        },
        defaultValue: { 
          summary: '[{title: "Item 1", content: "Lorem ipsum..."}, ...]' 
        },
      },
    },
    allowMultiple: {
      name: 'Allow Multiple',
      description: 'Permite que múltiples items estén abiertos simultáneamente',
      control: { type: 'boolean' },
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    defaultOpenIndex: {
      name: 'Default Open Index',
      description: 'Índice del item que debe estar abierto por defecto',
      control: { type: 'number', min: 0, max: 10 },
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 'null' },
      },
    },
    className: {
      name: 'Class Name',
      description: 'Clase CSS adicional para el contenedor principal',
      control: { type: 'text' },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '""' },
      },
    },
    // Controles de historia (no tocan la API del componente; afectan el contenedor)
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
    items: [
      {
        title: 'Item 1',
        content: 'Lorem ipsum dolor sit amet consectetur adipiscing elit luctus, nullam tempor duis potenti litora justo.',
      },
      {
        title: 'Item 2',
        content: 'Lorem ipsum dolor sit amet consectetur adipiscing elit luctus, nullam tempor duis potenti litora justo.',
      },
      {
        title: 'Item 3',
        content: 'Lorem ipsum dolor sit amet consectetur adipiscing elit luctus, nullam tempor duis potenti litora justo.',
      },
    ],
    allowMultiple: false,
    defaultOpenIndex: null,
    className: '',
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
  render: (args) => {
    const { containerMaxWidth, showBorder, padding, ...componentProps } = args;
    return (
      <Wrapper containerMaxWidth={containerMaxWidth} showBorder={showBorder} padding={padding}>
        <Accordion2 {...componentProps} />
      </Wrapper>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          'Render por defecto, con el contenedor centrado y ancho máximo de 560px. Solo un item puede estar abierto a la vez.',
      },
    },
  },
};

/** With Default Open */
export const WithDefaultOpen = {
  render: (args) => {
    const { containerMaxWidth, showBorder, padding, ...componentProps } = args;
    return (
      <Wrapper containerMaxWidth={containerMaxWidth} showBorder={showBorder} padding={padding}>
        <Accordion2 {...componentProps} />
      </Wrapper>
    );
  },
  args: {
    defaultOpenIndex: 0,
  },
  parameters: {
    docs: {
      description: {
        story: 'Acordeón con el primer item abierto por defecto.',
      },
    },
  },
};

/** Allow Multiple */
export const AllowMultiple = {
  render: (args) => {
    const { containerMaxWidth, showBorder, padding, ...componentProps } = args;
    return (
      <Wrapper containerMaxWidth={containerMaxWidth} showBorder={showBorder} padding={padding}>
        <Accordion2 {...componentProps} />
      </Wrapper>
    );
  },
  args: {
    allowMultiple: true,
    defaultOpenIndex: 0,
  },
  parameters: {
    docs: {
      description: {
        story: 'Permite que múltiples items estén abiertos simultáneamente.',
      },
    },
  },
};

/** Custom Content */
export const CustomContent = {
  render: (args) => {
    const { containerMaxWidth, showBorder, padding, ...componentProps } = args;
    return (
      <Wrapper containerMaxWidth={containerMaxWidth} showBorder={showBorder} padding={padding}>
        <Accordion2 {...componentProps} />
      </Wrapper>
    );
  },
  args: {
    items: [
      {
        title: '¿Qué es React?',
        content: 'React es una biblioteca de JavaScript para construir interfaces de usuario, especialmente aplicaciones web interactivas y reutilizables.',
      },
      {
        title: '¿Qué son los PropTypes?',
        content: 'PropTypes es una librería que permite validar las props que recibe un componente React, ayudando a detectar errores durante el desarrollo.',
      },
      {
        title: '¿Por qué usar Storybook?',
        content: 'Storybook permite desarrollar componentes de forma aislada, documentarlos y probar diferentes estados sin necesidad de una aplicación completa.',
      },
      {
        title: '¿Cómo funciona la accesibilidad?',
        content: 'Este acordeón usa ARIA attributes como aria-expanded, aria-controls y roles para ser compatible con lectores de pantalla y navegación por teclado.',
      },
    ],
    defaultOpenIndex: 0,
  },
  parameters: {
    docs: {
      description: {
        story: 'Ejemplo con contenido personalizado más realista y educativo.',
      },
    },
  },
};

/** Narrow (simula móvil estrecho) */
export const Narrow = {
  render: (args) => {
    const { containerMaxWidth, showBorder, padding, ...componentProps } = args;
    return (
      <Wrapper containerMaxWidth={containerMaxWidth} showBorder={showBorder} padding={padding}>
        <Accordion2 {...componentProps} />
      </Wrapper>
    );
  },
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




/** No Wrapper (Debug) */
export const NoWrapper = {
  render: (args) => {
    const { containerMaxWidth, showBorder, padding, ...componentProps } = args;
    return (
      <Accordion2 
        items={componentProps.items}
        allowMultiple={componentProps.allowMultiple}
        defaultOpenIndex={componentProps.defaultOpenIndex}
        className={componentProps.className}
      />
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Acordeón sin wrapper para debuggear problemas de CSS en Storybook.',
      },
    },
  },
};