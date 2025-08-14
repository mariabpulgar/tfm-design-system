import React from "react";
import ProgressBar from "../components/ProgressBar";

export default {
  title: 'Components/ProgressBar',
  component: ProgressBar,
  argTypes: {
    progress: {
      control: { type: 'range', min: 0, max: 100 },
      defaultValue: 50,
      description: 'El porcentaje de la barra de progreso (0-100).',
    },
  },
};

const Template = (args) => <ProgressBar {...args} />;

export const Default = Template.bind({});
Default.tags = ['autodocs'];
Default.args = {
  progress: 50,
};

export const ZeroProgress = Template.bind({});
ZeroProgress.tabs = ['autodocs'];
ZeroProgress.args = {
  progress: 0,
};

export const FullProgress = Template.bind({});
FullProgress.tabs = ['autodocs'];
FullProgress.args = {
  progress: 100,
};