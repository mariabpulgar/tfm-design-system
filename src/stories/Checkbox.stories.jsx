import React, { useState } from 'react';
import Checkbox from '../components/Checkbox';

export default {
    title: 'Components/Checkbox',
    component: Checkbox,
};

const Template = (args) => {
  const [checked, setChecked] = useState(false);
  const handleChange = () => setChecked(!checked);

  return <Checkbox {...args} checked={checked} onChange={handleChange} />;
};

export const Default = Template.bind({});
Default.args = {
  id: 'default-checkbox',
  label: 'Checkbox',
};

export const Checked = Template.bind({});
Checked.args = {
  id: 'checked-checkbox',
  label: 'Checkbox',
  checked: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  id: 'disabled-checkbox',
  label: 'Checkbox',
  disabled: true,
  checked: false,
};

export const DisabledChecked = Template.bind({});
DisabledChecked.args = {
  id: 'disabled-checked-checkbox',
  label: 'Checkbox',
  disabled: true,
  checked: true,
};