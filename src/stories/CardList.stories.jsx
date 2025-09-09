// src/stories/CardList.stories.jsx
import CardList from '../components/CardList';
import '../App.css';

const demoButtonItems = [
  { title: 'Producto Premium', description: 'Descripción premium.', imageSrc: '/src/assets/Rectangle979.svg', imageAlt: 'Producto premium' },
  { title: 'Servicio Profesional', description: 'Descripción servicio.', imageSrc: '/src/assets/Rectangle979.svg', imageAlt: 'Servicio profesional' },
  { title: 'Solución Integral', description: 'Descripción solución.', imageSrc: '/src/assets/Rectangle979.svg', imageAlt: 'Solución integral' },
];

const demoSimpleItems = [
  { title: 'Característica A', description: 'Detalles de la característica A.' },
  { title: 'Funcionalidad B', description: 'Detalles de la funcionalidad B.' },
  { title: 'Integración C', description: 'Detalles de la integración C.' },
];

const meta = {
  title: 'Components/CardList',
  component: CardList,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Lista de cards con variante **SimpleCard** o **ButtonCard**. Controla el layout con `orientation` y pasa datos vía `items`.',
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
      description: 'Orientación del contenido de cada card.',
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
      table: {
        type: { summary: 'Array<Item>' },
      },
    },
  },
};
export default meta;

export const ButtonCardsVertical = {
  name: 'Card vertical con botón',
  args: {
    cardType: 'button',
    orientation: 'vertical',
    buttonText: 'Ver más',
    items: demoButtonItems,
  },
};

export const ButtonCardsHorizontal = {
  name: 'Card Horizontal con botón',
  args: {
    cardType: 'button',
    orientation: 'horizontal',
    buttonText: 'Explorar',
    items: demoButtonItems,
  },
};

export const SimpleCardsVertical = {
  name: 'Card Vertical',
  args: {
    cardType: 'simple',
    orientation: 'vertical',
    items: demoSimpleItems,
  },
};

export const SimpleCardsHorizontal = {
  name: 'Card Horizontal',
  args: {
    cardType: 'simple',
    orientation: 'horizontal',
    items: demoSimpleItems,
  },
};

export const WithFallbackData = {
  name: 'Por defecto (interno)',
  args: {
    cardType: 'button',
    orientation: 'vertical',
    buttonText: 'Ver detalles',
    // sin items -> usa fallback de CardList
  },
};
