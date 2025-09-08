import Divider from '../components/atoms/Divider';
import '../App.css';

export default {
  title: 'Atoms/Divider',
  component: Divider,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'El componente Divider proporciona tres variantes para separar contenido visualmente: línea completa, con texto centrado, y con texto en formato chip. Incluye mejoras de accesibilidad para lectores de pantalla.',
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
    role: {
      control: { type: 'text' },
      description: 'Rol ARIA para el elemento',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'separator' },
      },
    },
    'aria-label': {
      control: { type: 'text' },
      description: 'Etiqueta ARIA personalizada para lectores de pantalla',
      table: {
        type: { summary: 'string' },
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
FullWidth.tags = ['autodocs'];
FullWidth.args = {
  variant: 'fullWidth',
};
FullWidth.parameters = {
  docs: {
    description: {
      story: 'Divider simple que ocupa todo el ancho disponible. Ideal para separar secciones de contenido. Es marcado como decorativo para lectores de pantalla.',
    },
  },
};

export const Center = Template.bind({});
Center.tags = ['autodocs'];
Center.args = {
  variant: 'center',
  text: 'OR',
};
Center.parameters = {
  docs: {
    description: {
      story: 'Divider con texto centrado en mayúsculas. Perfecto para separar opciones o secciones con etiqueta. Los lectores de pantalla anunciarán "Separador: OR".',
    },
  },
};

export const Chip = Template.bind({});
Chip.tags = ['autodocs'];
Chip.args = {
  variant: 'chip',
  text: 'Personal data',
};
Chip.parameters = {
  docs: {
    description: {
      story: 'Divider con texto en formato chip con background. Ideal para títulos de sección más prominentes. Los lectores de pantalla anunciarán "Separador de sección: Personal data".',
    },
  },
};

// Nueva historia: Divider con aria-label personalizado
export const CustomAriaLabel = Template.bind({});
CustomAriaLabel.tags = ['autodocs'];
CustomAriaLabel.args = {
  variant: 'center',
  text: 'OR',
  'aria-label': 'Separador entre opciones de inicio de sesión',
};
CustomAriaLabel.parameters = {
  docs: {
    description: {
      story: 'Ejemplo de divider con aria-label personalizado para proporcionar contexto más específico a los lectores de pantalla.',
    },
  },
};

// Historia de demostración con contexto
export const WithContext = TemplateWithContext.bind({});
WithContext.tags = ['autodocs'];
WithContext.args = {
  variant: 'chip',
  text: 'Account Settings',
};
WithContext.parameters = {
  docs: {
    description: {
      story: 'Divider mostrado en contexto con contenido antes y después para demostrar su función separadora.',
    },
  },
};