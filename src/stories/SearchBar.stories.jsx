// src/stories/SearchBar.stories.jsx
import React from 'react';
import SearchBar from '../components/molecules/SearchBar';

export default {
  title: 'Molecules/SearchBar',
  component: SearchBar,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    controls: { expanded: true },
    docs: {
      description: {
        component:
          'Componente de barra de búsqueda que combina un campo de texto (InputText) con un botón de ícono (IconButton). El placeholder se pasa como prop.',
      },
    },
  },
  argTypes: {
    placeholder: {
      control: 'text',
      description: 'Texto del placeholder del input.',
      table: { defaultValue: { summary: 'Search' } },
    },
  },
};

// Template base
const Template = (args) => <SearchBar {...args} />;

// Historia principal (Default)
export const Default = Template.bind({});
Default.args = {
  placeholder: 'Search',
};
Default.parameters = {
  docs: {
    description: {
      story:
        'Versión básica del SearchBar con placeholder por defecto **"Search"** y botón de búsqueda.',
    },
  },
};

// (Opcional) Ejemplo con placeholder personalizado
export const ConPlaceholderPersonalizado = Template.bind({});
ConPlaceholderPersonalizado.args = {
  placeholder: 'Buscar productos, categorías…',
};
