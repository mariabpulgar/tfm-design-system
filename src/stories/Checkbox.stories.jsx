import React, { useState } from 'react';
import Checkbox from '../components/atomos/Checkbox';

// Componente para historia interactiva
const InteractiveCheckbox = (args) => {
  const [isChecked, setIsChecked] = useState(args.checked || false);
  
  return (
    <Checkbox
      {...args}
      checked={isChecked}
      onChange={(e) => {
        setIsChecked(e.target.checked);
        args.onChange?.(e);
      }}
    />
  );
};

// Componente para múltiples checkboxes
const MultipleCheckboxesComponent = () => {
  const [checkboxes, setCheckboxes] = useState({
    option1: false,
    option2: true,
    option3: false,
  });

  const handleChange = (id) => (e) => {
    setCheckboxes(prev => ({
      ...prev,
      [id]: e.target.checked
    }));
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Checkbox
        id="option1"
        label="Opción 1"
        checked={checkboxes.option1}
        onChange={handleChange('option1')}
      />
      <Checkbox
        id="option2"
        label="Opción 2"
        checked={checkboxes.option2}
        onChange={handleChange('option2')}
      />
      <Checkbox
        id="option3"
        label="Opción 3"
        checked={checkboxes.option3}
        onChange={handleChange('option3')}
      />
    </div>
  );
};

// Componente para todos los estados
const AllStatesComponent = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
    <Checkbox
      id="state-default"
      label="Estado por defecto"
      checked={false}
    />
    <Checkbox
      id="state-checked"
      label="Estado marcado"
      checked={true}
    />
    <Checkbox
      id="state-disabled"
      label="Estado deshabilitado"
      checked={false}
      disabled={true}
    />
    <Checkbox
      id="state-disabled-checked"
      label="Estado deshabilitado y marcado"
      checked={true}
      disabled={true}
    />
    <Checkbox
      id="state-no-label"
      checked={false}
    />
  </div>
);

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    id: {
      control: 'text',
      description: 'Identificador único del checkbox',
    },
    label: {
      control: 'text',
      description: 'Texto de la etiqueta del checkbox',
    },
    checked: {
      control: 'boolean',
      description: 'Estado del checkbox (marcado/desmarcado)',
    },
    disabled: {
      control: 'boolean',
      description: 'Si el checkbox está deshabilitado',
    },
    onChange: {
      action: 'changed',
      description: 'Función que se ejecuta al cambiar el estado',
    },
  },
};

// Historia básica
export const Default = {
  args: {
    id: 'default-checkbox',
    label: 'Checkbox por defecto',
    checked: false,
    disabled: false,
  },
};

// Checkbox marcado
export const Checked = {
  args: {
    id: 'checked-checkbox',
    label: 'Checkbox marcado',
    checked: true,
    disabled: false,
  },
};

// Checkbox deshabilitado
export const Disabled = {
  args: {
    id: 'disabled-checkbox',
    label: 'Checkbox deshabilitado',
    checked: false,
    disabled: true,
  },
};

// Checkbox deshabilitado y marcado
export const DisabledChecked = {
  args: {
    id: 'disabled-checked-checkbox',
    label: 'Checkbox deshabilitado y marcado',
    checked: true,
    disabled: true,
  },
};

// Checkbox sin etiqueta
export const WithoutLabel = {
  args: {
    id: 'no-label-checkbox',
    checked: false,
    disabled: false,
  },
};

// Checkbox con etiqueta larga
export const LongLabel = {
  args: {
    id: 'long-label-checkbox',
    label: 'Este es un checkbox con una etiqueta muy larga que puede ocupar varias líneas para probar cómo se ve el componente',
    checked: false,
    disabled: false,
  },
};

export const Interactive = {
  render: (args) => <InteractiveCheckbox {...args} />,
  args: {
    id: 'interactive-checkbox',
    label: 'Checkbox interactivo',
    disabled: false,
  },
};

export const MultipleCheckboxes = {
  render: () => <MultipleCheckboxesComponent />,
  parameters: {
    docs: {
      description: {
        story: 'Ejemplo de múltiples checkboxes con estado independiente',
      },
    },
  },
};

export const AllStates = {
  render: () => <AllStatesComponent />,
  parameters: {
    docs: {
      description: {
        story: 'Todos los estados posibles del componente Checkbox',
      },
    },
  },
};