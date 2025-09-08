// src/stories/Testimonial.stories.jsx
import React from 'react';
import Testimonial from '../components/molecules/Testimonial';
import Rectangle979 from '../assets/Rectangle979.svg';

export default {
  title: 'Molecules/Testimonial',
  component: Testimonial,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Tarjeta de testimonio con imagen, texto y nombre. La imagen, el párrafo y el título se pasan como props.',
      },
    },
  },
  argTypes: {
    imageSrc: {
      control: 'text', // usa una URL o import local
      description: 'Fuente de la imagen (URL o import).',
      table: { type: { summary: 'string' } },
    },
    altText: {
      control: 'text',
      description: 'Texto alternativo de la imagen.',
      table: { type: { summary: 'string' } },
    },
    text: {
      control: 'text',
      description: 'Contenido del testimonio.',
      table: { type: { summary: 'string' } },
    },
    userName: {
      control: 'text',
      description: 'Nombre de la persona.',
      table: { type: { summary: 'string' } },
    },
  },
};

export const Default = {
  args: {
    imageSrc: Rectangle979,
    altText: 'Foto del usuario',
    text:
      '“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.”',
    userName: 'User name',
  },
};

export const WithLongText = {
  name: 'Texto largo',
  args: {
    imageSrc: Rectangle979,
    altText: 'Retrato de usuario',
    text:
      '“Este es un testimonio más largo para verificar el comportamiento del componente con múltiples líneas y cómo se adapta el bloque de texto a distintas longitudes sin romper el layout.”',
    userName: 'Usuario de ejemplo',
  },
};

export const WithRemoteImage = {
  name: 'Imagen remota (URL)',
  args: {
    imageSrc:
      'https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=400',
    altText: 'Avatar remoto',
    text:
      '“Excelente experiencia. El sistema fue fácil de usar y el soporte, impecable.”',
    userName: 'Ana López',
  },
};