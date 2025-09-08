// src/stories/SimpleCardList.stories.jsx
import SimpleCardList from '../components/SimpleCardList';
import '../App.css';

const demoItems = [
  {
    title: 'Card 1',
    description: 'Lorem ipsum dolor sit amet.',
    imgSrc: '/src/assets/Rectangle979.svg',
    imgAlt: 'Card 1',
  },
  {
    title: 'Card 2',
    description: 'Lorem ipsum dolor sit amet.',
    imgSrc: '/src/assets/Rectangle979.svg',
    imgAlt: 'Card 2',
  },
  {
    title: 'Card 3',
    description: 'Lorem ipsum dolor sit amet.',
    imgSrc: '/src/assets/Rectangle979.svg',
    imgAlt: 'Card 3',
  },
  {
    title: 'Card 4',
    description: 'Lorem ipsum dolor sit amet.',
    imgSrc: '/src/assets/Rectangle979.svg',
    imgAlt: 'Card 4',
  },
  {
    title: 'Card 5',
    description: 'Lorem ipsum dolor sit amet.',
    imgSrc: '/src/assets/Rectangle979.svg',
    imgAlt: 'Card 5',
  },
  {
    title: 'Card 6',
    description: 'Lorem ipsum dolor sit amet.',
    imgSrc: '/src/assets/Rectangle979.svg',
    imgAlt: 'Card 6',
  },
];

const meta = {
  title: 'Components/SimpleCardList',
  component: SimpleCardList,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Lista de **SimpleCard**. Pasa los datos con `items` (`title`, `description`, `imgSrc`, `imgAlt`) y controla la orientación con `variant`.',
      },
      source: {
        state: 'open',
        code: `<SimpleCardList
  variant="vertical"
  items={[
    { title: 'Card 1', description: 'Lorem ipsum…', imgSrc: '/src/assets/Rectangle979.svg', imgAlt: 'Card 1' },
    { title: 'Card 2', description: 'Lorem ipsum…', imgSrc: '/src/assets/Rectangle979.svg', imgAlt: 'Card 2' },
    { title: 'Card 3', description: 'Lorem ipsum…', imgSrc: '/src/assets/Rectangle979.svg', imgAlt: 'Card 3' }
  ]}
/>`,
      },
    },
  },
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: ['vertical', 'horizontal'],
      description: 'Orientación interna de cada SimpleCard.',
      table: { type: { summary: `'vertical' | 'horizontal'` }, defaultValue: { summary: 'vertical' } },
    },
    items: {
      control: 'object',
      description:
        'Datos de cada card. `description` acepta **string o JSX** (ReactNode) para, por ejemplo, resaltar cifras con `<strong>`.',
      table: {
        type: {
          summary:
            'Array<{ title: string; description: ReactNode; imgSrc?: string; imgAlt?: string }>',
        },
      },
    },
    className: {
      control: 'text',
      description: 'Clase CSS adicional para el contenedor.',
      table: { type: { summary: 'string' } },
    },
    emptyMessage: {
      control: 'text',
      description: 'Mensaje mostrado cuando no hay datos.',
      table: { type: { summary: 'string' }, defaultValue: { summary: 'Sin elementos para mostrar.' } },
    },
  },
};
export default meta;

export const Vertical = {
  name: 'Vertical (por defecto)',
  args: {
    variant: 'vertical',
    items: demoItems,
  },
};

export const Horizontal = {
  name: 'Horizontal',
  args: {
    variant: 'horizontal',
    items: demoItems,
  },
};

export const ConNumerosEnNegrita = {
  name: 'Con números en negrita (JSX)',
  args: {
    variant: 'vertical',
    items: [
      {
        title: 'Dato 1',
        description: (<><strong>+100</strong> animales rescatados</>),
        imgSrc: '/src/assets/Rectangle979.svg',
        imgAlt: 'Dato 1',
      },
      {
        title: 'Dato 2',
        description: (<><strong>50</strong> adopciones responsables</>),
        imgSrc: '/src/assets/Rectangle979.svg',
        imgAlt: 'Dato 2',
      },
      {
        title: 'Dato 3',
        description: (<><strong>20</strong> voluntarios activos</>),
        imgSrc: '/src/assets/Rectangle979.svg',
        imgAlt: 'Dato 3',
      },
    ],
  },
  parameters: {
    docs: {
      description: {
        story:
          'Ejemplo pasando `description` como JSX para resaltar cifras con `<strong>`.',
      },
      source: {
        state: 'open',
        code: `<SimpleCardList
  variant="vertical"
  items={[
    { title: 'Dato 1', description: (<><strong>+100</strong> animales rescatados</>), imgSrc: '/src/assets/Rectangle979.svg', imgAlt: 'Dato 1' },
    { title: 'Dato 2', description: (<><strong>50</strong> adopciones responsables</>), imgSrc: '/src/assets/Rectangle979.svg', imgAlt: 'Dato 2' },
    { title: 'Dato 3', description: (<><strong>20</strong> voluntarios activos</>), imgSrc: '/src/assets/Rectangle979.svg', imgAlt: 'Dato 3' }
  ]}
/>`,
      },
    },
  },
};
