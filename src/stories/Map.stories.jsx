// src/stories/Map.stories.jsx
import React from 'react';
import Map from '../components/organisms/Map';
import '../components/organisms/Map.css';

export default {
  title: 'Organisms/Map',
  component: Map,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    // (opcional) controla viewport desde la UI de SB
  },
  decorators: [
    (Story) => (
      <div
        style={{
          width: '100%',
          maxWidth: 1236,         // tu ancho Figma para desktop
          margin: '0 auto',
          padding: '0 16px',      // margen lateral suave en mobile
          boxSizing: 'border-box'
        }}
      >
        <Story />
      </div>
    ),
  ],
  argTypes: {
    lat: { control: 'number' },
    lng: { control: 'number' },
    zoom: { control: { type: 'range', min: 8, max: 18, step: 1 } },
    title: { control: 'text' },
    description: { control: 'text' },
    buttonText: { control: 'text' },
    width: { control: 'text' },   // para permitir '100%' sin tocar CSS
    height: { control: 'number' },
    cardWidth: { control: 'number' },
    cardHeight: { control: 'number' },
  },
};

export const Default = {
  args: {
    lat: 6.274,
    lng: -75.593,
    zoom: 14,
    title: 'Ubication',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    buttonText: 'Button',
    width: '100%',               // fluido, sin cambiar Map.css
    height: 300,
    cardWidth: 300,              // fiel a Figma
    cardHeight: 260,             // fiel a Figma
    onButtonClick: () =>
      window.open(
        'https://www.google.com/maps/dir/?api=1&destination=10.3381724,-75.4249801',
        '_blank',
        'noopener,noreferrer'
      ),
  },
};
