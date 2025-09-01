// src/components/ButtonCardList.stories.jsx
import ButtonCardList from '../components/ButtonCardList';

const meta = {
  title: 'Components/ButtonCardList',
  component: ButtonCardList,
  tags: ['autodocs'],
  parameters: {
    docs: {
      source: { state: 'open' }, // bloque de código visible por defecto
    },
  },
  argTypes: {
    orientation: {
      control: { type: 'inline-radio' },
      options: ['vertical', 'horizontal'],
      description: 'Orientación de las tarjetas internas',
      table: { type: { summary: "'vertical' | 'horizontal'" }, defaultValue: { summary: 'vertical' } },
    },
    items: {
      control: 'object',
      description: 'Listado de elementos para renderizar ButtonCard',
      table: { type: { summary: 'Array<ButtonCardItem>' } },
    },
    emptyMessage: {
      control: 'text',
      description: 'Mensaje cuando no hay elementos',
      table: { type: { summary: 'string' }, defaultValue: { summary: 'Sin elementos para mostrar.' } },
    },
    className: {
      control: 'text',
      description: 'Clase adicional para el contenedor',
      table: { type: { summary: 'string' } },
    },
  },
};
export default meta;

// Datos de demostración (args completos por item)
const demoItems = [
  {
    title: 'Adopciones',
    description: 'Conoce a nuestros peludos en busca de hogar.',
    imageSrc: '/src/assets/Rectangle979.svg',
    imageAlt: 'Adopciones',
    buttonText: 'Ver adopciones',
    buttonVariant: 'btn-primary',
    buttonSize: 'medium',
    buttonType: 'button',
    // onButtonClick: () => alert('Adopciones') // opcional
  },
  {
    title: 'Donaciones',
    description: <>Más de <strong>100</strong> animales reciben ayuda cada mes.</>,
    imageSrc: '/src/assets/Rectangle979.svg',
    imageAlt: 'Donaciones',
    buttonText: 'Donar ahora',
    buttonVariant: 'btn-secondary',
    buttonSize: 'medium',
    buttonType: 'button',
  },
  {
    title: 'Voluntariado',
    description: 'Únete como voluntario y marca la diferencia.',
    imageSrc: '/src/assets/Rectangle979.svg',
    imageAlt: 'Voluntariado',
    buttonText: 'Quiero ayudar',
    buttonVariant: 'btn-tertiary',
    buttonSize: 'medium',
    buttonType: 'button',
  },
  {
    title: 'Tienda solidaria',
    description: 'Compra con propósito: cada compra apoya a la fundación.',
    imageSrc: '/src/assets/Rectangle979.svg',
    imageAlt: 'Tienda',
    buttonText: 'Visitar tienda',
    buttonVariant: 'btn-primary',
    buttonSize: 'medium',
    buttonType: 'button',
  },
  {
    title: 'Campañas',
    description: 'Esterilizaciones, jornadas de vacunación y más.',
    imageSrc: '/src/assets/Rectangle979.svg',
    imageAlt: 'Campañas',
    buttonText: 'Ver campañas',
    buttonVariant: 'btn-secondary',
    buttonSize: 'medium',
    buttonType: 'button',
  },
  {
    title: 'Noticias',
    description: 'Historias y actualizaciones de nuestros rescatados.',
    imageSrc: '/src/assets/Rectangle979.svg',
    imageAlt: 'Noticias',
    buttonText: 'Leer noticias',
    buttonVariant: 'btn-tertiary',
    buttonSize: 'medium',
    buttonType: 'button',
  },
];

// HORIZONTAL
export const Horizontal = {
  args: {
    orientation: 'horizontal',
    items: demoItems,
    emptyMessage: 'No hay elementos para mostrar.',
    className: '',
  },
  render: (args) => (
    <div style={{ maxWidth: 1000, margin: '0 auto' }}>
      <ButtonCardList {...args} />
    </div>
  ),
};

// VERTICAL
export const Vertical = {
  args: {
    orientation: 'vertical',
    items: demoItems,
    emptyMessage: 'No hay elementos para mostrar.',
    className: '',
  },
  render: (args) => (
    <div style={{ maxWidth: 660, margin: '0 auto' }}>
      <ButtonCardList {...args} />
    </div>
  ),
};

// ESTADO VACÍO
export const EmptyState = {
  args: {
    orientation: 'vertical',
    items: [],
    emptyMessage: 'Sin elementos para mostrar.',
    className: '',
  },
  render: (args) => (
    <div style={{ maxWidth: 660, margin: '0 auto' }}>
      <ButtonCardList {...args} />
    </div>
  ),
};
