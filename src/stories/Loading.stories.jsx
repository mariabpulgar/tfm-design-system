import React from 'react';
import Loading from '../components/Loading';

export default {
  title: 'Components/Loading',
      parameters: {
    docs: {
      description: {
        component: 'Indicador visual de carga en procesos asíncronos o pantallas de espera.',
      },
    },
  },
  component: Loading,
};

const Template = (args) => <Loading {...args} />;

export const Default = Template.bind({});
Default.tags = ['autodocs'];