// src/stories/InputText.stories.jsx
import React from 'react';
import InputText from '../components/atoms/InputText.jsx';
import '../components/atoms/InputText.css';
import '../App.css'

export default {
  title: 'Atoms/InputText',
  component: InputText,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: { source: { state: 'open' } },
    controls: { expanded: true },
  },
};

const RenderWithLocalState = (args) => {
  const [val, setVal] = React.useState(args.value ?? '');
  return (
    <InputText
      {...args}
      value={val}
      onChange={(e) => setVal(e.target.value)}
    />
  );
};

export const Playground = {
  args: {
    value: '',
    name: 'username',
    label: 'Usuario',
    placeholder: 'Escribe…',
    type: 'text',
    error: '',
    disabled: false,
  },
  render: RenderWithLocalState,
};
