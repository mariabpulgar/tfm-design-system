import React from 'react';
import TextArea from '../components/TextArea';

export default {
  title: 'Components/TextArea',
  component: TextArea,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: 'text',
      description: 'Valor del textarea',
    },
    onChange: {
      action: 'changed',
      description: 'Función que se ejecuta cuando cambia el valor',
    },
    placeholder: {
      control: 'text',
      description: 'Texto de ayuda que aparece cuando está vacío',
    },
    disabled: {
      control: 'boolean',
      description: 'Deshabilita el componente',
    },
    error: {
      control: 'text',
      description: 'Mensaje de error a mostrar',
    },
    maxLength: {
      control: 'number',
      description: 'Límite máximo de caracteres',
    },
    minLength: {
      control: 'number',
      description: 'Límite mínimo de caracteres',
    },
    label: {
      control: 'text',
      description: 'Etiqueta del campo',
    },
    rows: {
      control: { type: 'number', min: 1, max: 20 },
      description: 'Número de filas visibles',
    },
    cols: {
      control: { type: 'number', min: 10, max: 100 },
      description: 'Número de columnas',
    },
    className: {
      control: 'text',
      description: 'Clases CSS adicionales',
    },
  },
};

// Historia por defecto
export const Default = {
  args: {
    placeholder: 'Escribe tu mensaje aquí...',
    rows: 4,
  },
};

// Con etiqueta
export const WithLabel = {
  args: {
    label: 'Comentarios',
    placeholder: 'Comparte tus comentarios...',
    rows: 4,
  },
};

// Con valor inicial
export const WithValue = {
  args: {
    label: 'Descripción',
    value: 'Este es un texto de ejemplo que muestra cómo se ve el componente con contenido inicial. Puedes editarlo y ver cómo responde el componente.',
    placeholder: 'Ingresa una descripción...',
    rows: 5,
  },
};

// Estado de error
export const WithError = {
  args: {
    label: 'Mensaje obligatorio',
    value: '',
    placeholder: 'Este campo es obligatorio...',
    error: 'Este campo es obligatorio',
    rows: 4,
  },
};

// Deshabilitado
export const Disabled = {
  args: {
    label: 'Campo deshabilitado',
    value: 'Este contenido no se puede editar porque el campo está deshabilitado.',
    placeholder: 'Campo no disponible',
    disabled: true,
    rows: 3,
  },
};



// Tamaño grande
export const LargeSize = {
  args: {
    label: 'Descripción detallada',
    placeholder: 'Proporciona una descripción detallada...',
    rows: 8,
  },
};

// Tamaño compacto
export const CompactSize = {
  args: {
    label: 'Nota breve',
    placeholder: 'Nota rápida...',
    rows: 2,
  },
};

