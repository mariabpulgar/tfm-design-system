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
        component:
          'Componente de alerta con variantes `error`, `warning`, `success` e `info`. Incluye ícono por defecto según variante, soporte para overrides (`iconName`, `iconColor`) y opción de cierre (`dismissible`).',
      },
    },
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['info', 'success', 'warning', 'error'],
      description: 'Tipo de alerta; define estilos, ícono y atributos ARIA.',
    },
    title: { control: 'text', description: 'Título de la alerta.' },
    message: { control: 'text', description: 'Mensaje descriptivo.' },
    dismissible: {
      control: 'boolean',
      description: 'Si está activo, muestra el botón de cerrar.',
    },
    onClose: {
      action: 'closed',
      description: 'Se dispara cuando se cierra la alerta.',
    },
    className: { control: 'text', description: 'Clases CSS adicionales.' },
    // Overrides opcionales del ícono
    iconName: {
      control: 'text',
      description:
        'Sobrescribe el ícono por defecto. Ejemplos: `infoIcon`, `warningIcon`, `checkIcon`, `notificationIcon`.',
    },
    iconColor: {
      control: 'text',
      description:
        'Sobrescribe el color del ícono (p. ej., `#333`, `var(--yellow-dark)`).',
    },
  },
};

/** Story principal con controles */
export const Playground = {
  args: {
    variant: 'info',
    title: 'Information',
    message:
      'This is an informational alert. Toggle dismissible to show/hide the close button.',
    dismissible: true,
    iconName: undefined,
    iconColor: undefined,
  },
};

/** Ejemplos por variante (snapshot friendly) */
export const Info = {
  args: {
    variant: 'info',
    title: 'Information',
    message: 'A new update is available for download.',
    dismissible: true,
  },
};

export const Success = {
  args: {
    variant: 'success',
    title: 'Success',
    message: 'Your profile has been updated successfully.',
    dismissible: false,
  },
};

export const Warning = {
  args: {
    variant: 'warning',
    title: 'Warning',
    message: 'Please double-check your input and try again.',
    dismissible: true,
  },
};

export const Error = {
  args: {
    variant: 'error',
    title: 'Error',
    message: 'Something went wrong while saving your changes.',
    dismissible: true,
  },
};

/** Override de ícono y color (para mostrar controles avanzados) */
export const WithIconOverride = {
  args: {
    variant: 'warning',
    title: 'Custom Icon',
    message: 'Using a custom icon and color via overrides.',
    dismissible: true,
    iconName: 'infoIcon',
    iconColor: 'var(--yellow-dark)',
  },
};