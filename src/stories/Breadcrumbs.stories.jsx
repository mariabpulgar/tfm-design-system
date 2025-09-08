import React, { useState } from 'react';
import Breadcrumbs from '../components/molecules/Breadcrumbs';
import '../App.css';
import '../components/molecules/Breadcrumbs.css';

export default {
  title: 'Molecules/Breadcrumbs',
  tags: ['autodocs'],
  component: Breadcrumbs,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Breadcrumbs accesible y controlable. Usa `items`, `currentIndex`, `onNavigate`, `showHome` y `separatorIcon`.',
      },
    },
  },
  argTypes: {
    items: {
      control: 'object',
      description: 'Lista de pasos: { label, href?, iconName?, disabled? }',
    },
    currentIndex: {
      control: { type: 'number', min: 0, step: 1 },
      description: 'Índice del paso activo (controlado). Si se omite, usa el último.',
    },
    showHome: {
      control: 'boolean',
      description: 'Muestra el ícono Home al inicio',
    },
    separatorIcon: {
      control: { type: 'select' },
      options: ['dropRightIcon', 'dropLeftIcon'],
      description: 'Nombre del ícono separador',
    },
    onNavigate: {
      action: 'navigate',
      description: 'Callback al hacer click en un paso (item, index)',
    },
  },
};

const baseItems = [
  { label: 'Step 1', href: '#step1' },
  { label: 'Step 2', href: '#step2' },
  { label: 'Step 3', disabled: true },
];

const Template = (args) => <Breadcrumbs {...args} />;

export const Default = Template.bind({});
Default.args = {
  items: baseItems,
  currentIndex: 1,      
  showHome: true,
  separatorIcon: 'dropRightIcon',
};

export const NoHome = Template.bind({});
NoHome.args = {
  ...Default.args,
  showHome: false,
};

export const WithIconsPerItem = Template.bind({});
WithIconsPerItem.args = {
  ...Default.args,
  items: [
    { label: 'Step 1', href: '#step1', iconName: 'checkIcon' },
    { label: 'Step 2', href: '#step2', iconName: 'settingsIcon' },
    { label: 'Step 3', disabled: true, iconName: 'lockIcon' },
  ],
};

export const Controlled = (args) => {
  const [idx, setIdx] = useState(args.currentIndex ?? 0);

  return (
    <Breadcrumbs
      {...args}
      currentIndex={idx}
      onNavigate={(item, i) => {
        if (!item?.disabled && i >= 0) {
          setIdx(i);
        }
        args.onNavigate && args.onNavigate(item, i);
      }}
    />
  );
};

Controlled.args = {
  items: baseItems,
  currentIndex: 0,
  showHome: true,
  separatorIcon: 'dropRightIcon',
};