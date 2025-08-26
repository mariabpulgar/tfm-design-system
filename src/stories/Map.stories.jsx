import React from 'react';
import Map from '../components/Map';

export default {
  title: 'Components/Map',
  component: Map,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  argTypes: {
    lat: { control: 'number' },
    lng: { control: 'number' },
    zoom: { control: { type: 'range', min: 8, max: 18, step: 1 } },
    title: { control: 'text' },
    description: { control: 'text' },
    buttonText: { control: 'text' },
    height: { control: 'number' },
  },
};

<Map
  lat={6.274}
  lng={-75.593}
  zoom={14}
  title="Ubication"
  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  buttonText="Button"
  height={300}
/>

export const Default = {
  args: {
    lat: 6.274,
    lng: -75.593,
    zoom: 14,
    title: 'Ubication',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    buttonText: 'Button',
    height: 300,
    onButtonClick: () => window.open('https://www.google.com/maps/dir/?api=1&destination=10.3381724,-75.4249801','_blank', 'noopener,noreferrer'),
  },
};