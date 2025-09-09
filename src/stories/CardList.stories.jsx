// src/stories/CardList.stories.jsx
import CardList from '../components/organisms/CardList';
import '../App.css';
import '../components/organisms/CardList.css';

const demoButtonItems = [
  { title: 'Producto Premium', description: 'Descripción premium.', imageSrc: '/src/assets/Rectangle979.svg', imageAlt: 'Producto premium' },
  { title: 'Servicio Profesional', description: 'Descripción servicio.', imageSrc: '/src/assets/Rectangle979.svg', imageAlt: 'Servicio profesional' },
  { title: 'Solución Integral', description: 'Descripción solución.', imageSrc: '/src/assets/Rectangle979.svg', imageAlt: 'Solución integral' },
];

const demoButtonItemsMany = [
  ...demoButtonItems,
  { title: 'Consultoría', description: 'Paquetes a medida.', imageSrc: '/src/assets/Rectangle979.svg', imageAlt: 'Consultoría' },
  { title: 'Soporte', description: 'Atención prioritaria.', imageSrc: '/src/assets/Rectangle979.svg', imageAlt: 'Soporte' },
  { title: 'Onboarding', description: 'Arranque guiado.', imageSrc: '/src/assets/Rectangle979.svg', imageAlt: 'Onboarding' },
];

const demoSimpleItems = [
  { title: 'Característica A', description: 'Detalles de la característica A.' },
  { title: 'Funcionalidad B', description: 'Detalles de la funcionalidad B.' },
  { title: 'Integración C', description: 'Detalles de la integración C.' },
];

const demoSimpleItemsMany = [
  ...demoSimpleItems,
  { title: 'Compatibilidad D', description: 'Amplía el alcance.' },
  { title: 'Rendimiento E', description: 'Optimiza tiempos.' },
  { title: 'Seguridad F', description: 'Mejores prácticas.' },
];

const meta = {
  title: 'Organisms/CardList',
  component: CardList,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen', // 100% de ancho para ver la fila horizontal
    docs: {
      description: {
        component:
          'Lista de cards con variante **SimpleCard** o **ButtonCard**. ' +
          'Controla el layout con `orientation`. En **horizontal**, se usan estilos de `.card-list-grid-horizontal` para mostrar **todas en una sola fila** con scroll si no caben. En **vertical**, `.card-list-grid-vertical` usa grid responsivo.',
      },
      source: {
        state: 'open',
        code: `<CardList
  cardType="button"
  orientation="vertical"
  buttonText="Ver más"
  items={[
    { title: "Producto Premium", description: "Descripción premium.", imageSrc: "/src/assets/Rectangle979.svg", imageAlt: "Producto premium" },
    { title: "Servicio Profesional", description: "Descripción servicio.", imageSrc: "/src/assets/Rectangle979.svg", imageAlt: "Servicio profesional" },
    { title: "Solución Integral", description: "Descripción solución.", imageSrc: "/src/assets/Rectangle979.svg", imageAlt: "Solución integral" }
  ]}
/>`,
      },
    },
  },
  decorators: [
    (Story) => (
      <div style={{ width: '100%', padding: '24px', boxSizing: 'border-box' }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    cardType: {
      control: { type: 'radio' },
      options: ['button', 'simple'],
      description: 'Selecciona el tipo de card que renderiza la lista.',
      table: { type: { summary: `'button' | 'simple'` }, defaultValue: { summary: 'button' } },
    },
    orientation: {
      control: { type: 'radio' },
      options: ['vertical', 'horizontal'],
      description: 'Orientación del layout de la lista.',
      table: { type: { summary: `'vertical' | 'horizontal'` }, defaultValue: { summary: 'vertical' } },
    },
    buttonText: {
      control: 'text',
      description: 'Texto del botón (solo aplica a `cardType="button"`).',
      table: { type: { summary: 'string' }, defaultValue: { summary: 'Ver más' } },
    },
    items: {
      control: 'object',
      description: 'Datos a renderizar: `{ title, description, imageSrc?, imageAlt?, ...overrides }`.',
      table: { type: { summary: 'Array<Item>' } },
    },
  },
};
export default meta;

/* --- Historias --- */
export const ButtonCardsVertical = {
  name: 'ButtonCard • Vertical',
  args: {
    cardType: 'button',
    orientation: 'vertical',
    buttonText: 'Ver más',
    items: demoButtonItems,
  },
};

export const ButtonCardsHorizontal = {
  name: 'ButtonCard • Horizontal (3 ítems)',
  args: {
    cardType: 'button',
    orientation: 'horizontal',
    buttonText: 'Explorar',
    items: demoButtonItems,
  },
};

export const ButtonCardsHorizontalMany = {
  name: 'ButtonCard • Horizontal (scroll)',
  args: {
    cardType: 'button',
    orientation: 'horizontal',
    buttonText: 'Explorar',
    items: demoButtonItemsMany,
  },
};

export const SimpleCardsVertical = {
  name: 'SimpleCard • Vertical',
  args: {
    cardType: 'simple',
    orientation: 'vertical',
    items: demoSimpleItems,
  },
};

export const SimpleCardsHorizontal = {
  name: 'SimpleCard • Horizontal (3 ítems)',
  args: {
    cardType: 'simple',
    orientation: 'horizontal',
    items: demoSimpleItems,
  },
};

export const SimpleCardsHorizontalMany = {
  name: 'SimpleCard • Horizontal (scroll)',
  args: {
    cardType: 'simple',
    orientation: 'horizontal',
    items: demoSimpleItemsMany,
  },
};

export const WithFallbackData = {
  name: 'Fallback interno',
  args: {
    cardType: 'button',
    orientation: 'vertical',
    buttonText: 'Ver detalles',
    // sin items -> usa fallback de CardList
  },
};
