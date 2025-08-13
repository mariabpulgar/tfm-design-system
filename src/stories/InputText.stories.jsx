import React, { useState } from 'react';
import InputText from '../components/InputText';


// Configuración principal de Storybook
export default {
  title: 'Components/InputText',
  component: InputText,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Componente InputText reutilizable con soporte para validaciones, diferentes tipos y estados.'
      }
    }
  },
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['text', 'email', 'password', 'tel', 'url'],
    },
    disabled: {
      control: { type: 'boolean' },
    },
    error: {
      control: { type: 'text' },
    },
    maxLength: {
      control: { type: 'number' },
    },
    minLength: {
      control: { type: 'number' },
    }
  },
  tags: ['autodocs'],
};

// Template para crear historias con estado
const Template = (args) => {
  const [value, setValue] = useState(args.value || '');
  
  return (
    <InputText
      {...args}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

// Historia por defecto
export const Default = Template.bind({});
Default.args = {
  label: 'Nombre',
  placeholder: 'Ingresa tu nombre',
  id: 'default-input',
  name: 'defaultInput'
};

// Historia con valor inicial
export const WithValue = Template.bind({});
WithValue.args = {
  label: 'Email',
  placeholder: 'ejemplo@correo.com',
  type: 'email',
  value: 'usuario@ejemplo.com',
  id: 'email-input',
  name: 'emailInput'
};

// Historia con error
export const WithError = Template.bind({});
WithError.args = {
  label: 'Contraseña',
  placeholder: 'Ingresa tu contraseña',
  type: 'password',
  error: 'La contraseña debe tener al menos 8 caracteres',
  id: 'password-input',
  name: 'passwordInput'
};

// Historia deshabilitado
export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Campo deshabilitado',
  placeholder: 'No se puede editar',
  disabled: true,
  value: 'Valor bloqueado',
  id: 'disabled-input',
  name: 'disabledInput'
};

// Historia con longitud máxima
export const WithMaxLength = Template.bind({});
WithMaxLength.args = {
  label: 'Código',
  placeholder: 'Máximo 5 caracteres',
  maxLength: 5,
  id: 'maxlength-input',
  name: 'maxLengthInput'
};

// Historia de teléfono
export const PhoneInput = Template.bind({});
PhoneInput.args = {
  label: 'Teléfono',
  placeholder: '+1 (555) 123-4567',
  type: 'tel',
  id: 'phone-input',
  name: 'phoneInput'
};

// Historia sin label
export const WithoutLabel = Template.bind({});
WithoutLabel.args = {
  placeholder: 'Input sin etiqueta',
  id: 'no-label-input',
  name: 'noLabelInput'
};

// Historia con todos los estados
export const AllStates = () => {
  const [values, setValues] = useState({
    normal: '',
    error: 'texto con error',
    disabled: 'valor deshabilitado',
    focused: ''
  });

  const handleChange = (field) => (e) => {
    setValues(prev => ({
      ...prev,
      [field]: e.target.value
    }));
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', width: '300px' }}>
      <InputText
        label="Estado normal"
        placeholder="Texto normal"
        value={values.normal}
        onChange={handleChange('normal')}
        id="normal-state"
        name="normalState"
      />
      
      <InputText
        label="Con error"
        placeholder="Texto con error"
        value={values.error}
        onChange={handleChange('error')}
        error="Este campo tiene un error"
        id="error-state"
        name="errorState"
      />
      
      <InputText
        label="Deshabilitado"
        placeholder="Campo bloqueado"
        value={values.disabled}
        onChange={handleChange('disabled')}
        disabled
        id="disabled-state"
        name="disabledState"
      />
      
      <InputText
        label="Enfocado automáticamente"
        placeholder="Input con autofocus"
        value={values.focused}
        onChange={handleChange('focused')}
        autoFocus
        id="focused-state"
        name="focusedState"
      />
    </div>
  );
};

// Playground interactivo
export const Playground = Template.bind({});
Playground.args = {
  label: 'Campo de prueba',
  placeholder: 'Modifica las props en los controles',
  type: 'text',
  disabled: false,
  error: '',
  maxLength: undefined,
  minLength: undefined,
  id: 'playground-input',
  name: 'playgroundInput'
};