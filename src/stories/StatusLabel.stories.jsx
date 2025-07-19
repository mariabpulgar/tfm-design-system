import React from 'react';
import StatusLabel from '../components/StatusLabel';

export default {
  title: 'Components/StatusLabel',
  component: StatusLabel,
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: [
        'default',
        'active',
        'activeInfo',
        'warning',
        'errorLabel',
        'activeIcon',
        'defaultIcon',
        'activeInfoIcon',
        'warningIcon',
        'errorLabelIcon',
      ],
    },
    text: { control: 'text' },
  },
};

const Template = (args) => <StatusLabel {...args} />;

export const Default = Template.bind({});
Default.args = {
  variant: 'default',
  text: 'Status default',
};
