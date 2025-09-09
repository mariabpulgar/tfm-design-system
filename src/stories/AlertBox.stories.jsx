import AlertBox from '../components/AlertBox';
import '../components/AlertBox.css';

export default {
  title: 'Components/AlertBox',
  component: AlertBox,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    controls: { expanded: true },
    docs: {
      description: {
        component:
          'Componente de alerta con variantes `error`, `advertencia`, `éxito` e `info`. Incluye ícono por defecto según variante, soporte para overrides (`iconName`, `iconColor`) y opción de cierre (`dismissible`).',
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
  name: 'Pruebas',
  args: {
    variant: 'info',
    title: 'Información',
    message:
      'Este es un aviso informativo. Activa la opción dismissible para mostrar u ocultar el botón de cierre.',
    dismissible: true,
    iconName: undefined,
    iconColor: undefined,
  },
};

/** Ejemplos por variante (snapshot friendly) */
export const Info = {
  name: 'Información',
  args: {
    variant: 'info',
    title: 'Información',
    message: 'Este es un aviso informativo. Activa la opción dismissible para mostrar u ocultar el botón de cierre.',
    dismissible: true,
  },
};

export const Success = {
  name: 'Éxito',
  args: {
    variant: 'success',
    title: 'Éxito',
    message: 'Tu perfil se ha actualizado correctamente.',
    dismissible: false,
  },
};

export const Warning = {
  name: 'Advertencia',
  args: {
    variant: 'warning',
    title: 'Advertencia',
    message: 'Por favor, revisa tu entrada y vuelve a intentarlo.',
    dismissible: true,
  },
};

export const Error = {
  name: 'Error',
  args: {
    variant: 'error',
    title: 'Error',
    message: 'Ocurrió un problema al guardar tus cambios.',
    dismissible: true,
  },
};

/** Override de ícono y color (para mostrar controles avanzados) */
/* export const SobreEscritura = {
  args: {
    variant: 'warning',
    title: 'Ícono personalizado',
    message: 'Usando un ícono y color personalizados mediante overrides.',
    dismissible: true,
    iconName: 'infoIcon',
    iconColor: 'var(--yellow-dark)',
  },
}; */