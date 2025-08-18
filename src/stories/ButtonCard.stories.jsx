// src/stories/ButtonCard.stories.jsx
import React from 'react';
import ButtonCard from '../components/ButtonCard';
import rectangle from '../assets/Rectangle979.svg';

export default {
  title: 'Components/ButtonCard',
  component: ButtonCard,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    controls: { expanded: true },
    docs: {
      description: {
        component:
          'Card con imagen, título, descripción y botón integrado. Soporta orientación **horizontal** y **vertical**.',
      },
    },
  },
  argTypes: {
    orientation: {
      control: { type: 'inline-radio' },
      options: ['horizontal', 'vertical'],
      description: 'Orientación del layout.',
      table: { defaultValue: { summary: 'horizontal' } },
    },
    title: {
      control: 'text',
      description: 'Texto del encabezado (h5).',
      table: { defaultValue: { summary: 'Card' } },
    },
    description: {
      control: 'text',
      description: 'Texto del párrafo.',
      table: { defaultValue: { summary: 'Lorem ipsum dolor sit amet.' } },
    },
    buttonText: {
      control: 'text',
      description: 'Texto del botón.',
      table: { defaultValue: { summary: 'Button' } },
    },
    buttonVariant: {
      control: 'text',
      description: 'Variante del botón (ej. "btn-primary").',
      table: { defaultValue: { summary: 'btn-primary' } },
    },
    buttonSize: {
      control: { type: 'inline-radio' },
      options: ['small', 'medium', 'large'],
      description: 'Tamaño del botón.',
      table: { defaultValue: { summary: 'medium' } },
    },
    buttonType: {
      control: { type: 'inline-radio' },
      options: ['button', 'submit', 'reset'],
      description: 'Tipo del botón.',
      table: { defaultValue: { summary: 'button' } },
    },
    imageSrc: {
      control: 'text',
      description:
        'Fuente de la imagen. Por defecto usa el asset importado (rectangle).',
    },
    imageAlt: {
      control: 'text',
      description: 'Texto alternativo de la imagen.',
      table: { defaultValue: { summary: 'placeholder' } },
    },
    onButtonClick: {
      action: 'clicked',
      description: 'Callback al hacer click en el botón.',
    },
  },
  args: {
    orientation: 'horizontal',
    title: 'Título de la card',
    description: 'Descripción corta de la card.',
    buttonText: 'Ver más',
    buttonVariant: 'btn-primary',
    buttonSize: 'medium',
    buttonType: 'button',
    imageSrc: rectangle,
    imageAlt: 'placeholder',
  },
};

export const Horizontal = {
  name: 'Horizontal (por defecto)',
};

export const Vertical = {
  args: {
    orientation: 'vertical',
    title: 'Card Vertical',
    description: 'Contenido descriptivo en layout vertical.',
    buttonText: 'Abrir',
  },
};

export const ConImagenPersonalizada = {
  args: {
    title: 'Card con imagen personalizada',
    description: 'Usando otra imagen mediante prop.',
    imageSrc: rectangle, // reemplazar por otra ruta si la tienes disponible
    imageAlt: 'ilustración',
  },
};

export const BotonSecundario = {
  args: {
    buttonText: 'Acción secundaria',
    buttonVariant: 'btn-secondary',
  },
};
