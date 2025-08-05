import IconSelector from '../components/IconSelector';

// Configuración de metadatos para Storybook
export default {
  title: 'Components/IconSelector',
  component: IconSelector,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Componente para renderizar iconos SVG dinámicamente con diferentes tamaños y colores.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    name: {
      control: 'select',
      options: [
        'statusIcon',
        'plusIcon', 
        'checkedIcon',
        'infoIcon',
        'warningIcon',
        'closeIcon',
        'notificationIcon'
      ],
      description: 'Nombre del icono a renderizar',
    },
    color: {
      control: 'color',
      description: 'Color del icono',
      defaultValue: 'var(--gray-darker)',
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'regular', 'large', 'display'],
      description: 'Tamaño del icono',
      defaultValue: 'regular',
    },
    className: {
      control: 'text',
      description: 'Clases CSS adicionales',
    },
  },
};

// Template base para las historias
const Template = (args) => <IconSelector {...args} />;

// Historia por defecto
export const Default = Template.bind({});
Default.args = {
  name: 'statusIcon',
  color: 'var(--gray-darker)',
  size: 'regular',
};

// Historia con todos los iconos
export const AllIcons = () => (
  <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', alignItems: 'center' }}>
    <IconSelector name="statusIcon" />
    <IconSelector name="plusIcon" />
    <IconSelector name="checkedIcon" />
    <IconSelector name="infoIcon" />
    <IconSelector name="warningIcon" />
    <IconSelector name="closeIcon" />
    <IconSelector name="notificationIcon" />
  </div>
);

AllIcons.parameters = {
  docs: {
    description: {
      story: 'Muestra todos los iconos disponibles en el componente.',
    },
  },
};

// Historia con todos los tamaños
export const AllSizes = () => (
  <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
    <div style={{ textAlign: 'center' }}>
      <IconSelector name="statusIcon" size="small" />
      <p style={{ marginTop: '8px', fontSize: '12px' }}>Small</p>
    </div>
    <div style={{ textAlign: 'center' }}>
      <IconSelector name="statusIcon" size="medium" />
      <p style={{ marginTop: '8px', fontSize: '12px' }}>Medium</p>
    </div>
    <div style={{ textAlign: 'center' }}>
      <IconSelector name="statusIcon" size="regular" />
      <p style={{ marginTop: '8px', fontSize: '12px' }}>Regular</p>
    </div>
    <div style={{ textAlign: 'center' }}>
      <IconSelector name="statusIcon" size="large" />
      <p style={{ marginTop: '8px', fontSize: '12px' }}>Large</p>
    </div>
    <div style={{ textAlign: 'center' }}>
      <IconSelector name="statusIcon" size="display" />
      <p style={{ marginTop: '8px', fontSize: '12px' }}>Display</p>
    </div>
  </div>
);

AllSizes.parameters = {
  docs: {
    description: {
      story: 'Muestra el icono en todos los tamaños disponibles.',
    },
  },
};

// Historia con diferentes colores
export const ColorVariations = () => (
  <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
    <div style={{ textAlign: 'center' }}>
      <IconSelector name="infoIcon" color="var(--gray-darker)" size="large" />
      <p style={{ marginTop: '8px', fontSize: '12px' }}>Default</p>
    </div>
    <div style={{ textAlign: 'center' }}>
      <IconSelector name="checkedIcon" color="#28a745" size="large" />
      <p style={{ marginTop: '8px', fontSize: '12px' }}>Success</p>
    </div>
    <div style={{ textAlign: 'center' }}>
      <IconSelector name="warningIcon" color="#ffc107" size="large" />
      <p style={{ marginTop: '8px', fontSize: '12px' }}>Warning</p>
    </div>
    <div style={{ textAlign: 'center' }}>
      <IconSelector name="closeIcon" color="#dc3545" size="large" />
      <p style={{ marginTop: '8px', fontSize: '12px' }}>Danger</p>
    </div>
    <div style={{ textAlign: 'center' }}>
      <IconSelector name="notificationIcon" color="#007bff" size="large" />
      <p style={{ marginTop: '8px', fontSize: '12px' }}>Primary</p>
    </div>
  </div>
);

ColorVariations.parameters = {
  docs: {
    description: {
      story: 'Muestra el icono con diferentes variaciones de color.',
    },
  },
};

// Historia interactiva
export const Interactive = Template.bind({});
Interactive.args = {
  name: 'plusIcon',
  color: '#007bff',
  size: 'large',
  className: '',
};

Interactive.parameters = {
  docs: {
    description: {
      story: 'Historia interactiva donde puedes cambiar todas las propiedades del componente.',
    },
  },
};

// Historia con iconos clickeables
export const ClickableIcons = () => (
  <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
    <IconSelector 
      name="closeIcon" 
      size="large" 
      color="#dc3545"
      style={{ cursor: 'pointer' }}
      onClick={() => alert('Close clicked!')}
      title="Cerrar"
    />
    <IconSelector 
      name="plusIcon" 
      size="large" 
      color="#28a745"
      style={{ cursor: 'pointer' }}
      onClick={() => alert('Add clicked!')}
      title="Agregar"
    />
    <IconSelector 
      name="checkedIcon" 
      size="large" 
      color="#007bff"
      style={{ cursor: 'pointer' }}
      onClick={() => alert('Check clicked!')}
      title="Completado"
    />
  </div>
);

ClickableIcons.parameters = {
  docs: {
    description: {
      story: 'Muestra iconos que pueden ser clickeables con eventos onClick.',
    },
  },
};

// Historia con fondo oscuro
export const DarkBackground = () => (
  <div style={{ 
    backgroundColor: '#2d3748', 
    padding: '32px', 
    borderRadius: '8px',
    display: 'flex',
    gap: '16px',
    alignItems: 'center'
  }}>
    <IconSelector name="statusIcon" color="white" size="large" />
    <IconSelector name="plusIcon" color="#90cdf4" size="large" />
    <IconSelector name="checkedIcon" color="#68d391" size="large" />
    <IconSelector name="warningIcon" color="#fbd38d" size="large" />
    <IconSelector name="closeIcon" color="#fc8181" size="large" />
  </div>
);

DarkBackground.parameters = {
  docs: {
    description: {
      story: 'Muestra cómo se ven los iconos en un fondo oscuro.',
    },
  },
};

// Historia mostrando un icono no encontrado
export const IconNotFound = Template.bind({});
IconNotFound.args = {
  name: 'nonExistentIcon',
  color: 'red',
  size: 'large',
};

IconNotFound.parameters = {
  docs: {
    description: {
      story: 'Muestra el comportamiento cuando se solicita un icono que no existe (revisa la consola).',
    },
  },
};