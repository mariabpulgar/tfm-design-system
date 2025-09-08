import React, { useState } from 'react';
import RadioButton from '../components/atoms/RadioButton';

const optionsArray = [
  { label: 'Opción A', value: 'opcionA' },
  { label: 'Opción B', value: 'opcionB' },
  { label: 'Opción C', value: 'opcionC' },
];

export default {
  title: 'Atoms/RadioButton',
  component: RadioButton,
  argTypes: {
    id: { control: false },
    name: { control: false },
    label: { control: 'text' },
    value: { control: false },
    onChange: { control: false },
    checked: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
};

const ControlableLabelTemplate = (args) => {
  const [checked, setChecked] = useState(args.checked);
  const handleChange = () => setChecked(!checked);

  return <RadioButton {...args} checked={checked} onChange={handleChange} />;
};

export const Default = ControlableLabelTemplate.bind({});
Default.tags = ['autodocs'];
Default.args = {
  id: 'radio-1',
  name: 'radio-group',
  label: 'Radio button',
  checked: false,
};

export const Checked = ControlableLabelTemplate.bind({});
Checked.tags = ['autodocs'];
Checked.args = {
  id: 'radio-2',
  name: 'radio-group',
  label: 'Opción seleccionada',
  checked: true,
};

export const Disabled = ControlableLabelTemplate.bind({});
Disabled.tags = ['autodocs'];
Disabled.args = {
  id: 'radio-3',
  name: 'radio-group',
  label: 'Opción deshabilitada',
  disabled: true,
};