import AlertBox from '../components/molecules/AlertBox';
import '../components/molecules/AlertBox.css';

export default {
  title: 'Molecules/AlertBox',
  component: AlertBox,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    controls: { expanded: true },
    docs: {
      description: {
        component: `
El componente AlertBox muestra notificaciones importantes al usuario con diferentes niveles de severidad.

### Características:
- 4 variantes: info, success, warning, error
- Iconos automáticos según la variante
- Opción de cierre (dismissible)
- Totalmente accesible con ARIA
- Responsive y compatible con modo de alto contraste
        `,
      },
    },
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['info', 'success', 'warning', 'error'],
      description: 'Tipo de alerta que define el color y el icono',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'info' },
      },
    },
    title: {
      control: 'text',
      description: 'Título principal de la alerta',
      table: {
        type: { summary: 'string | ReactNode' },
      },
    },
    message: {
      control: 'text',
      description: 'Mensaje descriptivo de la alerta',
      table: {
        type: { summary: 'string | ReactNode' },
      },
    },
    dismissible: {
      control: 'boolean',
      description: 'Si se puede cerrar la alerta',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
    },
    onClose: {
      action: 'closed',
      description: 'Función que se ejecuta al cerrar la alerta',
      table: {
        type: { summary: 'function' },
      },
    },
    className: {
      control: 'text',
      description: 'Clases CSS adicionales',
      table: {
        type: { summary: 'string' },
      },
    },
  },
};

// Template base
const Template = (args) => <AlertBox {...args} />;

// Historia principal con controles
export const Playground = Template.bind({});
Playground.args = {
  variant: 'info',
  title: 'Información',
  message: 'Esta es una alerta informativa. Puedes cambiar las propiedades usando los controles de abajo.',
  dismissible: true,
};
Playground.storyName = 'Playground (Controles)';

// Variantes individuales
export const Info = Template.bind({});
Info.args = {
  variant: 'info',
  title: 'Nueva actualización disponible',
  message: 'Hay una nueva versión de la aplicación lista para descargar.',
  dismissible: true,
};
Info.storyName = 'Info';

export const Success = Template.bind({});
Success.args = {
  variant: 'success',
  title: 'Operación exitosa',
  message: 'Tu perfil ha sido actualizado correctamente.',
  dismissible: true,
};
Success.storyName = 'Success';

export const Warning = Template.bind({});
Warning.args = {
  variant: 'warning',
  title: 'Atención requerida',
  message: 'Por favor revisa la información antes de continuar.',
  dismissible: true,
};
Warning.storyName = 'Warning';

export const Error = Template.bind({});
Error.args = {
  variant: 'error',
  title: 'Error en la operación',
  message: 'Hubo un problema al guardar los cambios. Inténtalo de nuevo.',
  dismissible: true,
};
Error.storyName = 'Error';

// Casos especiales
export const WithoutTitle = Template.bind({});
WithoutTitle.args = {
  variant: 'info',
  message: 'Esta alerta no tiene título, solo mensaje.',
  dismissible: true,
};
WithoutTitle.storyName = 'Sin título';

export const NotDismissible = Template.bind({});
NotDismissible.args = {
  variant: 'error',
  title: 'Error crítico',
  message: 'Esta alerta no se puede cerrar porque requiere acción del usuario.',
  dismissible: false,
};
NotDismissible.storyName = 'No se puede cerrar';

export const LongContent = Template.bind({});
LongContent.args = {
  variant: 'warning',
  title: 'Mensaje largo para probar el diseño responsive',
  message: 'Este es un mensaje muy largo para verificar cómo se comporta el componente cuando el contenido es extenso. El diseño debe mantenerse consistente y legible incluso con mucho texto.',
  dismissible: true,
};
LongContent.storyName = 'Contenido largo';

// Historia que muestra todas las variantes juntas
export const AllVariants = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', width: '500px' }}>
    <AlertBox
      variant="info"
      title="Información"
      message="Esta es una alerta informativa"
      dismissible={false}
    />
    <AlertBox
      variant="success"
      title="Éxito"
      message="Operación completada exitosamente"
      dismissible={false}
    />
    <AlertBox
      variant="warning"
      title="Advertencia"
      message="Se requiere tu atención"
      dismissible={false}
    />
    <AlertBox
      variant="error"
      title="Error"
      message="Algo salió mal"
      dismissible={false}
    />
  </div>
);
AllVariants.storyName = 'Todas las variantes';

// Historia para testing de estados
export const InteractiveStates = () => {
  const handleClose = (variant) => {
    alert(`Alerta ${variant} cerrada`);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', width: '500px' }}>
      <AlertBox
        variant="info"
        title="Alerta interactiva"
        message="Haz hover y click en el botón de cerrar"
        onClose={() => handleClose('info')}
      />
      <AlertBox
        variant="success"
        title="Solo mensaje"
        message="Esta alerta solo tiene mensaje, sin título"
        onClose={() => handleClose('success')}
      />
    </div>
  );
};
InteractiveStates.storyName = 'Estados interactivos';