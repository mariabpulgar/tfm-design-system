import React from 'react';
import StatusLabel from '../components/molecules/StatusLabel';

export default {
  title: 'Molecules/StatusLabel',
  component: StatusLabel,
  parameters: {
    docs: {
      description: {
        component: 'StatusLabel es un componente versátil que permite mostrar diferentes estados con iconos y colores específicos. Los iconos pueden posicionarse al inicio (leading) o al final (trailing) del texto.',
      },
    },
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: [
        'default',
        'active',
        'activeInfo',
        'warning',
        'errorLabel',
        'activeIcon',
        'defaultIcon',
        'activeInfoIcon',
        'warningIcon',
        'errorLabelIcon',
      ],
      description: 'Variante del StatusLabel que determina el color, icono y posición',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'default' },
      },
    },
    text: {
      control: 'text',
      description: 'Texto personalizado a mostrar. Si no se proporciona, se usa el texto por defecto de la variante',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' },
      },
    },
  },
};

const Template = (args) => <StatusLabel {...args} />;

// Variantes con iconos leading (al inicio)
export const Default = Template.bind({});
Default.tags = ['autodocs'];
Default.args = {
  variant: 'default',
  text: 'Status default',
};
Default.parameters = {
  docs: {
    description: {
      story: 'Estado por defecto con icono de estado al inicio.',
    },
  },
};

export const Active = Template.bind({});
Active.args = {
  variant: 'active',
  text: 'Status active',
};
Active.parameters = {
  docs: {
    description: {
      story: 'Estado activo con color verde y icono de estado al inicio.',
    },
  },
};

export const ActiveInfo = Template.bind({});
ActiveInfo.args = {
  variant: 'activeInfo',
  text: 'Status active info',
};
ActiveInfo.parameters = {
  docs: {
    description: {
      story: 'Estado activo informativo con color azul y icono de estado al inicio.',
    },
  },
};

export const Warning = Template.bind({});
Warning.args = {
  variant: 'warning',
  text: 'Warning status',
};
Warning.parameters = {
  docs: {
    description: {
      story: 'Estado de advertencia con color amarillo y icono de estado al inicio.',
    },
  },
};

export const ErrorLabel = Template.bind({});
ErrorLabel.args = {
  variant: 'errorLabel',
  text: 'Error status',
};
ErrorLabel.parameters = {
  docs: {
    description: {
      story: 'Estado de error con color rojo y icono de estado al inicio.',
    },
  },
};

// Variantes con iconos trailing (al final)
export const ActiveIcon = Template.bind({});
ActiveIcon.args = {
  variant: 'activeIcon',
  text: 'Status active',
};
ActiveIcon.parameters = {
  docs: {
    description: {
      story: 'Estado activo con icono de check al final del texto.',
    },
  },
};

export const DefaultIcon = Template.bind({});
DefaultIcon.args = {
  variant: 'defaultIcon',
  text: 'Add new status',
};
DefaultIcon.parameters = {
  docs: {
    description: {
      story: 'Estado por defecto con icono de plus al final del texto.',
    },
  },
};

export const ActiveInfoIcon = Template.bind({});
ActiveInfoIcon.args = {
  variant: 'activeInfoIcon',
  text: 'Information status',
};
ActiveInfoIcon.parameters = {
  docs: {
    description: {
      story: 'Estado informativo con icono de información al final del texto.',
    },
  },
};

export const WarningIcon = Template.bind({});
WarningIcon.args = {
  variant: 'warningIcon',
  text: 'Warning alert',
};
WarningIcon.parameters = {
  docs: {
    description: {
      story: 'Estado de advertencia con icono de warning al final del texto.',
    },
  },
};

export const ErrorLabelIcon = Template.bind({});
ErrorLabelIcon.args = {
  variant: 'errorLabelIcon',
  text: 'Error occurred',
};
ErrorLabelIcon.parameters = {
  docs: {
    description: {
      story: 'Estado de error con icono de cierre al final del texto.',
    },
  },
};

// Historia especial para mostrar todas las variantes juntas
export const AllVariants = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
    <div>
      <h3 style={{ marginBottom: '8px', fontSize: '14px', fontWeight: '600' }}>
        Variantes con iconos leading (al inicio)
      </h3>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
        <StatusLabel variant="default" />
        <StatusLabel variant="active" />
        <StatusLabel variant="activeInfo" />
        <StatusLabel variant="warning" />
        <StatusLabel variant="errorLabel" />
      </div>
    </div>
    
    <div>
      <h3 style={{ marginBottom: '8px', fontSize: '14px', fontWeight: '600' }}>
        Variantes con iconos trailing (al final)
      </h3>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
        <StatusLabel variant="activeIcon" />
        <StatusLabel variant="defaultIcon" />
        <StatusLabel variant="activeInfoIcon" />
        <StatusLabel variant="warningIcon" />
        <StatusLabel variant="errorLabelIcon" />
      </div>
    </div>
  </div>
);
AllVariants.parameters = {
  docs: {
    description: {
      story: 'Visualización de todas las variantes disponibles del StatusLabel organizadas por posición del icono.',
    },
  },
};

// Historia para demostrar texto personalizado
export const CustomText = Template.bind({});
CustomText.args = {
  variant: 'active',
  text: 'Texto personalizado',
};
CustomText.parameters = {
  docs: {
    description: {
      story: 'Ejemplo de cómo usar texto personalizado en lugar del texto por defecto de la variante.',
    },
  },
};