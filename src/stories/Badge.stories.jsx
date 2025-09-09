import Badge from '../components/Badge';

export default {
  title: 'Components/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Componente de notificación (badge) que muestra conteos o indicadores sobre iconos.',
      },
    },
  },
  argTypes: {
    count: {
      control: { type: 'number', min: 0, max: 999 },
      description: 'The number to display in the badge',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 'undefined' },
      },
    },
    max: {
      control: { type: 'number', min: 1, max: 999 },
      description: 'Valor máximo a mostrar antes de usar “+” (p. ej., 99 ⇒ “99+”)',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '99' },
      },
    },
    showZero: {
      control: 'boolean',
      description: 'Mostrar el badge cuando el conteo es 0',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    dot: {
      control: 'boolean',
      description: 'Mostrar como indicador de punto (dot) sin conteo',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    showIcon: {
      control: 'boolean',
      description: 'Mostrar el ícono de notificación',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    className: {
      control: 'text',
      description: 'Clases CSS adicionales a aplicar',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '""' },
      },
    },
  },
};

// Playground
export const Playground = {
  name: 'Pruebas',
  tags: ['autodocs'],
  args: {
    count: 5,
    max: 99,
    showZero: false,
    dot: false,
    showIcon: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Espacio interactivo para probar diferentes combinaciones de props.',
      },
    },
  },
};

// Default story
export const Default = {
  tags: ['autodocs'],
  args: {
    count: 5,
    showIcon: true,
  },
};

// With Icon
export const WithIcon = {
  name: 'Badge con icono',
  tags: ['autodocs'],
  args: {
    count: 10,
    showIcon: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Badge mostrado con el ícono de notificación.',
      },
    },
  },
};

// Without Icon
export const WithoutIcon = {
  name: 'Badge sin icono',
  tags: ['autodocs'],
  args: {
    count: 3,
    showIcon: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'Badge mostrado sin el ícono de notificación; útil para aplicarlo sobre otros elementos.',
      },
    },
  },
};

// High Count (with overflow)
export const HighCount = {
  name: 'Badge con contador alto',
  tags: ['autodocs'],
  args: {
    count: 150,
    showIcon: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Cuando el conteo supera el valor máximo (max=99), se muestra “99+”.',
      },
    },
  },
};

// Custom Max Value
export const CustomMax = {
  name: 'Badge máximo personalizado',
  tags: ['autodocs'],
  args: {
    count: 25,
    max: 20,
    showIcon: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Valor máximo personalizado antes de mostrar el indicador de desbordamiento.',
      },
    },
  },
};

// Dot Indicator
export const DotIndicator = {
  name: 'Badge contador de punto',
  tags: ['autodocs'],
  args: {
    dot: true,
    showIcon: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Indicador tipo punto (dot) sin conteo; útil para mostrar “hay notificaciones” sin números.',
      },
    },
  },
};

// Zero Count (Hidden)
export const ZeroCountHidden = {
  name: 'Badge contador cero oculto',
  tags: ['autodocs'],
  args: {
    count: 0,
    showZero: false,
    showIcon: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'De forma predeterminada, el badge se oculta cuando el conteo es 0.',
      },
    },
  },
};

// Zero Count (Shown)
export const ZeroCountShown = {
  name: 'Badge contador cero',
  tags: ['autodocs'],
  args: {
    count: 0,
    showZero: true,
    showIcon: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'El badge puede configurarse para mostrarse incluso cuando el conteo es 0.',
      },
    },
  },
};

// Edge Cases
export const EdgeCases = {
  name: 'Badge con casos extremos',
  tags: ['autodocs'],
  render: () => (
    <div style={{ display: 'flex', gap: '40px', alignItems: 'flex-start' }}>
      <div style={{ textAlign: 'center' }}>
        <Badge count={1} showIcon />
        <p style={{ marginTop: '10px', fontSize: '12px', color: '#666' }}>Single digit</p>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Badge count={99} showIcon />
        <p style={{ marginTop: '10px', fontSize: '12px', color: '#666' }}>Max value</p>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Badge count={100} showIcon />
        <p style={{ marginTop: '10px', fontSize: '12px', color: '#666' }}>Overflow</p>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Badge count={999} max={500} showIcon />
        <p style={{ marginTop: '10px', fontSize: '12px', color: '#666' }}>Custom max</p>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Varios casos límite y valores de borde.',
      },
    },
  },
};
