// CardList.stories.jsx
import React from 'react';
import CardList from '../components/CardList';
import '../App.css';

export default {
  title: 'Components/CardList',
  component: CardList,
  parameters: {
    layout: 'centered', // evita que en 'fullscreen' se pegue a los bordes del canvas
    docs: {
      description: {
        component:
          'Lista de cards en grilla. Máximo 3 columnas (opción B con auto-fit + minmax).',
      },
    },
  },
  argTypes: {
    buttonText: {
      control: 'text',
      description: 'Texto del botón en cada card',
    },
  },
};

// Template base
const Template = (args) => <CardList {...args} />;

// Historia por defecto
export const Default = Template.bind({});
Default.storyName = 'Por defecto';
Default.args = {
  buttonText: 'Ver más',
};

// Historia con texto personalizado
export const WithCustomButtonText = Template.bind({});
WithCustomButtonText.storyName = 'Con texto personalizado';
WithCustomButtonText.args = {
  buttonText: 'Leer artículo',
};
