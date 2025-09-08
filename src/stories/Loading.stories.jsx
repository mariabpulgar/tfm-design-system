import React from 'react';
import Loading from '../components/atoms/Loading';

export default {
  title: 'Atoms/Loading',
  component: Loading,
  parameters: {
    docs: {
      description: {
        component: 'Componente de loading con animación personalizada de tres círculos. Incluye soporte completo para accesibilidad con texto alternativo y respeto por las preferencias de movimiento reducido.'
      }
    }
  },
  argTypes: {
    text: {
      control: 'text',
      description: 'Texto que se muestra junto al loading o como texto alternativo para lectores de pantalla',
      defaultValue: 'Cargando...'
    },
    hideText: {
      control: 'boolean',
      description: 'Si es true, el texto solo será accesible para lectores de pantalla pero no visible en pantalla',
      defaultValue: false
    }
  }
};

const Template = (args) => <Loading {...args} />;

// Historia por defecto
export const Default = Template.bind({});
Default.args = {};
Default.tags = ['autodocs'];

// Con texto personalizado
export const WithCustomText = Template.bind({});
WithCustomText.args = {
  text: 'Procesando datos...'
};
WithCustomText.parameters = {
  docs: {
    description: {
      story: 'Loading con texto personalizado que se muestra debajo de la animación.'
    }
  }
};

// Solo para lectores de pantalla (texto oculto)
export const HiddenText = Template.bind({});
HiddenText.args = {
  text: 'Cargando información del usuario...',
  hideText: true
};
HiddenText.parameters = {
  docs: {
    description: {
      story: 'Loading con texto solo accesible para tecnologías asistivas. Útil cuando quieres mantener un diseño minimalista pero conservar la accesibilidad.'
    }
  }
};

// Diferentes textos contextuales
export const Login = Template.bind({});
Login.args = {
  text: 'Iniciando sesión...'
};

export const DataFetch = Template.bind({});
DataFetch.args = {
  text: 'Obteniendo datos...'
};

export const FileUpload = Template.bind({});
FileUpload.args = {
  text: 'Subiendo archivo...'
};

export const Processing = Template.bind({});
Processing.args = {
  text: 'Procesando solicitud...'
};

// Casos de uso en contenedores
export const InCard = () => (
  <div style={{ 
    border: '1px solid #e0e0e0', 
    borderRadius: '8px', 
    padding: '40px', 
    textAlign: 'center',
    maxWidth: '300px',
    margin: '0 auto'
  }}>
    <h3 style={{ marginBottom: '20px', color: '#333' }}>Cargando perfil</h3>
    <Loading text="Obteniendo información del usuario..." />
  </div>
);
InCard.parameters = {
  docs: {
    description: {
      story: 'Ejemplo de uso del loading dentro de una tarjeta o contenedor.'
    }
  }
};

export const InButton = () => (
  <button 
    style={{ 
      padding: '12px 24px', 
      border: 'none', 
      borderRadius: '6px', 
      backgroundColor: '#007bff', 
      color: 'white',
      cursor: 'not-allowed',
      opacity: 0.7,
      display: 'flex',
      alignItems: 'center',
      gap: '12px'
    }}
    disabled
  >
    <Loading text="Enviando..." hideText={true} />
    Enviando...
  </button>
);
InButton.parameters = {
  docs: {
    description: {
      story: 'Loading integrado en un botón durante una acción asíncrona.'
    }
  }
};

// Playground para experimentar
export const Playground = Template.bind({});
Playground.args = {
  text: 'Cargando...',
  hideText: false
};
Playground.parameters = {
  docs: {
    description: {
      story: 'Usa los controles de abajo para experimentar con diferentes configuraciones del componente.'
    }
  }
};