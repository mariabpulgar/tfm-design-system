import React from 'react';
import Modal from '../components/organisms/Modal';
import '../App.css'

export default {
  title: 'Organisms/Modal',
  component: Modal,
  tags: ['autodocs'],
  parameters: { 
    layout: 'centered', 
    controls: { expanded: true } 
  },
  argTypes: {
    open: { 
      control: 'boolean',
      description: 'Controls if the modal is visible or hidden'
    },
    closeOnEsc: { 
      control: 'boolean',
      description: 'Allow closing modal with Escape key'
    },
    closeOnBackdrop: { 
      control: 'boolean',
      description: 'Allow closing modal by clicking outside'
    },
    title: {
      control: 'text',
      description: 'Modal title text'
    },
    description: {
      control: 'text',
      description: 'Modal description/content text'
    },
    cancelText: {
      control: 'text',
      description: 'Cancel button text'
    },
    acceptText: {
      control: 'text',
      description: 'Accept button text'
    },
    iconName: {
      control: 'text',
      description: 'Icon name for the modal header'
    },
    onClose: { 
      action: 'closed',
      description: 'Callback fired when modal is closed'
    },
  },
  args: { 
    closeOnEsc: true, 
    closeOnBackdrop: true,
    title: "¡Notification!",
    description: "You're about to delete this item. This action is permanent and cannot be reverted.",
    cancelText: "Cancel",
    acceptText: "Accept",
    iconName: "notificationIcon"
  },
};

// Historia interactiva con botón para abrir/cerrar
export const Interactive = {
  args: {},
  render: (args) => {
    const [open, setOpen] = React.useState(false);
    
    return (
      <Modal
        {...args}
        open={open}
        onOpen={() => setOpen(true)}
        onClose={(reason) => {
          setOpen(false);
          args.onClose?.(reason);
        }}
      />
    );
  },
};

// Modal siempre abierto para testing
export const AlwaysOpen = {
  args: { 
    open: true 
  },
  render: (args) => {
    const [open, setOpen] = React.useState(true);
    
    return (
      <Modal
        {...args}
        open={open}
        onOpen={() => setOpen(true)}
        onClose={(reason) => {
          setOpen(false);
          args.onClose?.(reason);
        }}
      />
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Modal siempre abierto para probar estilos y contenido'
      }
    }
  }
};

// Modal cerrado (muestra solo el trigger button si lo hubiera)
export const Closed = {
  args: { 
    open: false 
  },
  parameters: {
    docs: {
      description: {
        story: 'Modal en estado cerrado'
      }
    }
  }
};

// Modal con contenido personalizado
export const CustomContent = {
  args: {
    title: "Confirmar acción",
    description: "¿Estás seguro de que quieres proceder con esta acción?",
    cancelText: "Cancelar",
    acceptText: "Confirmar",
    iconName: "warningIcon"
  },
  render: (args) => {
    const [open, setOpen] = React.useState(true);
    
    return (
      <Modal
        {...args}
        open={open}
        onOpen={() => setOpen(true)}
        onClose={(reason) => {
          setOpen(false);
          args.onClose?.(reason);
        }}
      />
    );
  }
};

// Modal sin posibilidad de cerrar con ESC
export const NoEscapeClose = {
  args: {
    closeOnEsc: false,
    title: "Acción obligatoria",
    description: "Debes completar esta acción para continuar."
  },
  render: (args) => {
    const [open, setOpen] = React.useState(true);
    
    return (
      <Modal
        {...args}
        open={open}
        onOpen={() => setOpen(true)}
        onClose={(reason) => {
          setOpen(false);
          args.onClose?.(reason);
        }}
      />
    );
  }
};

// Modal sin posibilidad de cerrar haciendo clic fuera
export const NoBackdropClose = {
  args: {
    closeOnBackdrop: false,
    title: "Confirmación requerida",
    description: "Esta acción requiere tu confirmación explícita."
  },
  render: (args) => {
    const [open, setOpen] = React.useState(true);
    
    return (
      <Modal
        {...args}
        open={open}
        onOpen={() => setOpen(true)}
        onClose={(reason) => {
          setOpen(false);
          args.onClose?.(reason);
        }}
      />
    );
  }
};