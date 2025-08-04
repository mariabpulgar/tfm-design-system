import Divider from '../components/Divider';

export default {
  title: 'Components/Divider',
  component: Divider,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'El componente Divider proporciona tres variantes para separar contenido visualmente: línea completa, con texto centrado, y con texto en formato chip.',
      },
    },
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['fullWidth', 'center', 'chip'],
      description: 'Tipo de divider a mostrar',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'fullWidth' },
      },
    },
    text: {
      control: { type: 'text' },
      description: 'Texto a mostrar en las variantes center y chip',
      table: {
        type: { summary: 'string' },
      },
    },
    className: {
      control: { type: 'text' },
      description: 'Clases CSS adicionales',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
      },
    },
  },
};

// Template base
const Template = (args) => <Divider {...args} />;

// Template con contexto para mostrar mejor el divider
const TemplateWithContext = (args) => (
  <div style={{ maxWidth: '600px', margin: '0 auto' }}>
    <p style={{ marginBottom: '24px', color: '#2F2F2F' }}>
      Contenido antes del divider. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </p>
    <Divider {...args} />
    <p style={{ marginTop: '24px', color: '#2F2F2F' }}>
      Contenido después del divider. Sed do eiusmod tempor incididunt ut labore.
    </p>
  </div>
);

// Historias principales
export const FullWidth = Template.bind({});
FullWidth.args = {
  variant: 'fullWidth',
};
FullWidth.parameters = {
  docs: {
    description: {
      story: 'Divider simple que ocupa todo el ancho disponible. Ideal para separar secciones de contenido.',
    },
  },
};

export const Center = Template.bind({});
Center.args = {
  variant: 'center',
  text: 'OR',
};
Center.parameters = {
  docs: {
    description: {
      story: 'Divider con texto centrado en mayúsculas. Perfecto para separar opciones o secciones con etiqueta.',
    },
  },
};

export const Chip = Template.bind({});
Chip.args = {
  variant: 'chip',
  text: 'Personal data',
};
Chip.parameters = {
  docs: {
    description: {
      story: 'Divider con texto en formato chip con background. Ideal para títulos de sección más prominentes.',
    },
  },
};

