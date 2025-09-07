// src/stories/ButtonCard.stories.jsx
import React from 'react';
import ButtonCard from '../components/molecules/ButtonCard';
import rectangle from '../assets/Rectangle979.svg';

export default {
  title: 'Molecules/ButtonCard',
  component: ButtonCard,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    controls: { expanded: true },
    docs: {
      description: {
        component:
          'Card con imagen, título, descripción y botón integrado. Soporta orientación **horizontal** y **vertical**. La variante del componente de imagen se asigna automáticamente según `orientation`.',
      },
    },
  },
  argTypes: {
    orientation: {
      control: { type: 'inline-radio' },
      options: ['horizontal', 'vertical'],
      description: 'Orientación del layout (también controla la variante de la imagen).',
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
      control: 'text', // o { type: 'select', options: ['btn-primary','btn-secondary','btn-tertiary'] } si tienes esas variantes
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
      control: 'text', // si prefieres subir archivos, cambia a 'file' con loader
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
      description: 'Callback al hacer clic en el botón.',
      table: { category: 'Events' },
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

