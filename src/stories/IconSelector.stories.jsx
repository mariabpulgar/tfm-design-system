import React from 'react';
import IconSelector from '../components/IconSelector';

export default {
  title: 'Components/IconSelector',
  component: IconSelector,
  argTypes: {
    name: {
      control: { type: 'select' },
      options: ['statusIcon', 'plusIcon', 'checkedIcon', 'infoIcon', 'warningIcon', 'closeIcon'],
    },
    size: {
      control: { type: 'text' },
    },
    color: {
      control: { type: 'color' },
    },
  },
};

const Template = (args) => <IconSelector {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: 'checkedIcon',
  size: '16px',
  color: '#545454',
};
