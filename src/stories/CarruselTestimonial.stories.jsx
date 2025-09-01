// CarruselTestimonial.stories.jsx
import React from 'react';
import CarruselTestimonial from '../components/CarruselTestimonial';
import Testimonial from '../components/Testimonial';
import Rectangle979 from '../assets/Rectangle979.svg';
import '../components/CarruselTestimonial.css';

export default {
  title: 'Components/CarruselTestimonial',
  component: Testimonial, // 👉 El control de props se hace sobre Testimonial
  subcomponents: { CarruselTestimonial },
  tags: ['autodocs'],
  parameters: {
    docs: {
      source: { state: 'open' },
      description: {
        component:
          'Carrusel de testimonios con flechas de navegación. Para los controles de props se usa el componente **Testimonial**, que recibe `imageSrc`, `altText`, `text` (descripción) y `userName`.',
      },
    },
    controls: { expanded: true },
    layout: 'centered',
  },
  argTypes: {
    imageSrc: {
      description: 'Ruta o import de la imagen del testimonio',
      control: 'text',
    },
    altText: {
      description: 'Texto alternativo de la imagen',
      control: 'text',
    },
    text: {
      description: 'Descripción o testimonio del usuario',
      control: 'text',
    },
    userName: {
      description: 'Nombre de la persona que da el testimonio',
      control: 'text',
    },
  },
};

// Historia horizontal (demo dentro de Carrusel)
export const Horizontal = {
  name: 'Horizontal',
  args: {
    imageSrc: Rectangle979,
    altText: 'Foto del usuario',
    text: '“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.”',
    userName: 'User name',
  },
  render: (args) => (
    <div style={{ maxWidth: 900 }}>
      <CarruselTestimonial>
        <Testimonial {...args} />
        <Testimonial {...args} />
        <Testimonial {...args} />
      </CarruselTestimonial>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Ejemplo del carrusel en disposición horizontal. Puedes controlar las props del `Testimonial` desde los controles.',
      },
    },
  },
};

// Historia vertical (demo alternativo)
export const Vertical = {
  name: 'Vertical',
  args: {
    imageSrc: Rectangle979,
    altText: 'Foto del usuario',
    text: '“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.”',
    userName: 'User name',
  },
  render: (args) => (
    <div style={{ maxWidth: 560 }}>
      <CarruselTestimonial>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <Testimonial {...args} />
          <Testimonial {...args} />
          <Testimonial {...args} />
        </div>
      </CarruselTestimonial>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Ejemplo del carrusel mostrado en columna (simulación de layout vertical).',
      },
    },
  },
};
