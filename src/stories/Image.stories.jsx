import React from 'react';
import Image from '../components/Image';

export default {
  title: 'Components/Image',
  component: Image,
  tags: ['autodocs'],   // 👈 habilita autodocs
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Componente de imagen con variantes de tamaño predefinidas mediante clases CSS.',
      },
    },
  },
  argTypes: {
    src: {
      control: 'text',
      description: 'Ruta de la imagen',
      defaultValue: '/src/assets/Rectangle979.svg',
    },
    alt: {
      control: 'text',
      description: 'Texto alternativo de la imagen (importante para accesibilidad).',
      defaultValue: 'Imagen de ejemplo',
    },
    variant: {
      control: { type: 'select' },
      options: [
        'img-simpleCard-horizontal',
        'img-simpleCard-vertical',
        'img-buttonCard-horizontal',
        'img-buttonCard-vertical',
        'img-gallery-principal',
        'img-gallery-mini',
        'img-grid-gallery-large',
        'img-grid-gallery-small',
        'img-testimonial',
      ],
      description: 'Clase CSS que define el tamaño/variante de la imagen.',
    },
  },
};

// Template base
const Template = (args) => <Image {...args} />;

// Historias individuales según tu lista
export const SimpleCardHorizontal = Template.bind({});
SimpleCardHorizontal.storyName = 'Imagen para Simple Card Horizontal';
SimpleCardHorizontal.args = { variant: 'img-simpleCard-horizontal' };

export const SimpleCardVertical = Template.bind({});
SimpleCardVertical.storyName = 'Imagen para Simple Card Vertical';
SimpleCardVertical.args = { variant: 'img-simpleCard-vertical' };

export const ButtonCardHorizontal = Template.bind({});
ButtonCardHorizontal.storyName = 'Imagen para Button Card Horizontal';
ButtonCardHorizontal.args = { variant: 'img-buttonCard-horizontal' };

export const ButtonCardVertical = Template.bind({});
ButtonCardVertical.storyName = 'Imagen para Button Card Vertical';
ButtonCardVertical.args = { variant: 'img-buttonCard-vertical' };

export const GalleryPrincipal = Template.bind({});
GalleryPrincipal.storyName = 'Imagen de Galería Principal';
GalleryPrincipal.args = { variant: 'img-gallery-principal' };

export const GalleryMini = Template.bind({});
GalleryMini.storyName = 'Imagen de Galería Mini';
GalleryMini.args = { variant: 'img-gallery-mini' };

export const GridGalleryLarge = Template.bind({});
GridGalleryLarge.storyName = 'Imagen de Galería Grid Grande';
GridGalleryLarge.args = { variant: 'img-grid-gallery-large' };

export const GridGallerySmall = Template.bind({});
GridGallerySmall.storyName = 'Imagen de Galería Grid Pequeña';
GridGallerySmall.args = { variant: 'img-grid-gallery-small' };

export const Testimonial = Template.bind({});
Testimonial.storyName = 'Imagen de Testimonio';
Testimonial.args = { variant: 'img-testimonial' };
