import React from 'react';
import ButtonGroup from '../components/organisms/ButtonGroup';
import '../App.css'
import '../components/organisms/ButtonGroup.css'

// Configuración del meta para Storybook 9.1.3
export default {
  title: 'Organisms/ButtonGroup',
  component: ButtonGroup,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Un grupo de botones conectados que actúan como una unidad cohesiva. Ideal para alternar entre opciones o agrupar acciones relacionadas.',
      },
    },
  },
  argTypes: {
    items: {
      description: 'Array de objetos que definen cada botón del grupo',
      control: { type: 'object' },
    },
    size: {
      description: 'Tamaño por defecto para todos los botones',
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
    variant: {
      description: 'Variante por defecto para todos los botones',
      control: { type: 'select' },
      options: ['btn-primary', 'btn-secondary', 'btn-outline', 'btn-ghost'],
    },
    className: {
      description: 'Clases CSS adicionales para el contenedor',
      control: { type: 'text' },
    },
    ariaLabel: {
      description: 'Etiqueta de accesibilidad para el grupo',
      control: { type: 'text' },
    },
    equal: {
      description: 'Si es true, todos los botones tendrán el mismo ancho',
      control: { type: 'boolean' },
    },
    onItemClick: {
      description: 'Handler global para clicks en cualquier botón',
      action: 'itemClicked',
    },
  },
  tags: ['autodocs'],
};

// Historia por defecto
export const Default = {
  args: {
    items: [
      { text: 'Opción 1', onClick: () => console.log('Opción 1 clicked') },
      { text: 'Opción 2', onClick: () => console.log('Opción 2 clicked') },
      { text: 'Opción 3', onClick: () => console.log('Opción 3 clicked') },
    ],
    size: 'medium',
    variant: 'btn-primary',
    ariaLabel: 'Grupo de opciones',
  },
};

// Historia con diferentes tamaños
export const Sizes = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'center' }}>
      <ButtonGroup
        {...args}
        size="small"
        items={[
          { text: 'Pequeño 1' },
          { text: 'Pequeño 2' },
          { text: 'Pequeño 3' },
        ]}
        ariaLabel="Botones pequeños"
      />
      <ButtonGroup
        {...args}
        size="medium"
        items={[
          { text: 'Mediano 1' },
          { text: 'Mediano 2' },
          { text: 'Mediano 3' },
        ]}
        ariaLabel="Botones medianos"
      />
      <ButtonGroup
        {...args}
        size="large"
        items={[
          { text: 'Grande 1' },
          { text: 'Grande 2' },
          { text: 'Grande 3' },
        ]}
        ariaLabel="Botones grandes"
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Diferentes tamaños disponibles para el grupo de botones.',
      },
    },
  },
};

// Historia con diferentes variantes
export const Variants = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'center' }}>
      <ButtonGroup
        {...args}
        variant="btn-primary"
        items={[
          { text: 'Primary 1' },
          { text: 'Primary 2' },
          { text: 'Primary 3' },
        ]}
        ariaLabel="Botones primarios"
      />
      <ButtonGroup
        {...args}
        variant="btn-secondary"
        items={[
          { text: 'Secondary 1' },
          { text: 'Secondary 2' },
          { text: 'Secondary 3' },
        ]}
        ariaLabel="Botones secundarios"
      />
      <ButtonGroup
        {...args}
        variant="btn-outline"
        items={[
          { text: 'Outline 1' },
          { text: 'Outline 2' },
          { text: 'Outline 3' },
        ]}
        ariaLabel="Botones outline"
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Diferentes variantes de estilo para los botones del grupo.',
      },
    },
  },
};

// Historia con botones activos
export const WithActiveStates = {
  args: {
    items: [
      { text: 'Día', isActive: true },
      { text: 'Semana', isActive: false },
      { text: 'Mes', isActive: false },
      { text: 'Año', isActive: false },
    ],
    variant: 'btn-outline',
    ariaLabel: 'Selector de período',
  },
  parameters: {
    docs: {
      description: {
        story: 'Ejemplo con uno de los botones marcado como activo.',
      },
    },
  },
};

// Historia con botones deshabilitados
export const WithDisabledButtons = {
  args: {
    items: [
      { text: 'Disponible', disabled: false },
      { text: 'Deshabilitado', disabled: true },
      { text: 'También disponible', disabled: false },
      { text: 'También deshabilitado', disabled: true },
    ],
    variant: 'btn-primary',
    ariaLabel: 'Grupo con botones deshabilitados',
  },
  parameters: {
    docs: {
      description: {
        story: 'Ejemplo con algunos botones deshabilitados.',
      },
    },
  },
};

// Historia con anchos iguales
export const EqualWidth = {
  args: {
    items: [
      { text: 'Corto' },
      { text: 'Texto más largo' },
      { text: 'XL' },
    ],
    equal: true,
    variant: 'btn-secondary',
    ariaLabel: 'Botones de ancho igual',
  },
  parameters: {
    docs: {
      description: {
        story: 'Todos los botones tienen el mismo ancho cuando equal es true.',
      },
    },
  },
};

// Historia con variantes mixtas por botón
export const MixedVariants = {
  args: {
    items: [
      { text: 'Primary', variant: 'btn-primary' },
      { text: 'Secondary', variant: 'btn-secondary' },
      { text: 'Outline', variant: 'btn-outline' },
    ],
    ariaLabel: 'Grupo con variantes mixtas',
  },
  parameters: {
    docs: {
      description: {
        story: 'Cada botón puede tener su propia variante específica.',
      },
    },
  },
};

// Historia con tamaños mixtos por botón
export const MixedSizes = {
  args: {
    items: [
      { text: 'Small', size: 'small' },
      { text: 'Medium', size: 'medium' },
      { text: 'Large', size: 'large' },
    ],
    variant: 'btn-primary',
    ariaLabel: 'Grupo con tamaños mixtos',
  },
  parameters: {
    docs: {
      description: {
        story: 'Cada botón puede tener su propio tamaño específico.',
      },
    },
  },
};

// Historia interactiva con handlers
export const InteractiveExample = {
  render: (args) => {
    const [activeIndex, setActiveIndex] = React.useState(0);
    
    const handleItemClick = (btn, index) => {
      setActiveIndex(index);
      console.log('Clicked button:', btn.text, 'at index:', index);
    };

    const items = [
      { text: 'Inicio', isActive: activeIndex === 0 },
      { text: 'Productos', isActive: activeIndex === 1 },
      { text: 'Servicios', isActive: activeIndex === 2 },
      { text: 'Contacto', isActive: activeIndex === 3 },
    ];

    return (
      <div style={{ textAlign: 'center' }}>
        <ButtonGroup
          {...args}
          items={items}
          onItemClick={handleItemClick}
          variant="btn-outline"
          ariaLabel="Navegación principal"
        />
        <p style={{ marginTop: '20px', fontSize: '14px', color: '#666' }}>
          Botón activo: <strong>{items[activeIndex].text}</strong>
        </p>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Ejemplo interactivo que muestra cómo manejar el estado activo y los clicks.',
      },
    },
  },
};

// Historia con IDs personalizados
export const WithCustomIds = {
  args: {
    items: [
      { id: 'btn-home', text: 'Inicio' },
      { id: 'btn-about', text: 'Acerca de' },
      { id: 'btn-contact', text: 'Contacto' },
    ],
    variant: 'btn-primary',
    ariaLabel: 'Navegación con IDs personalizados',
  },
  parameters: {
    docs: {
      description: {
        story: 'Ejemplo con IDs personalizados para cada botón.',
      },
    },
  },
};

// Historia con clases CSS personalizadas
export const WithCustomClasses = {
  args: {
    items: [
      { 
        text: 'Botón especial', 
        className: 'custom-button-class' 
      },
      { 
        text: 'Botón normal' 
      },
      { 
        text: 'Otro especial', 
        className: 'another-custom-class' 
      },
    ],
    className: 'custom-group-class',
    variant: 'btn-secondary',
    ariaLabel: 'Grupo con clases personalizadas',
  },
  parameters: {
    docs: {
      description: {
        story: 'Ejemplo mostrando cómo agregar clases CSS personalizadas tanto al grupo como a botones individuales.',
      },
    },
  },
};

// Historia de dos botones (caso común)
export const TwoButtons = {
  args: {
    items: [
      { text: 'Cancelar', variant: 'btn-secondary' },
      { text: 'Confirmar', variant: 'btn-primary' },
    ],
    ariaLabel: 'Acciones de confirmación',
  },
  parameters: {
    docs: {
      description: {
        story: 'Caso común de dos botones para acciones de confirmación.',
      },
    },
  },
};

// Historia con muchos botones
export const ManyButtons = {
  args: {
    items: [
      { text: 'Ene' },
      { text: 'Feb' },
      { text: 'Mar' },
      { text: 'Abr' },
      { text: 'May' },
      { text: 'Jun' },
      { text: 'Jul' },
      { text: 'Ago' },
      { text: 'Sep' },
      { text: 'Oct' },
      { text: 'Nov' },
      { text: 'Dic' },
    ],
    size: 'small',
    variant: 'btn-outline',
    equal: true,
    ariaLabel: 'Selector de mes',
  },
  parameters: {
    docs: {
      description: {
        story: 'Ejemplo con muchos botones, útil para selectores como meses del año.',
      },
    },
  },
};