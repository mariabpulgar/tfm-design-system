import React from 'react';
import Button from '../components/Button';

// Lista base de opciones de iconos (ajústala a tu mapeo real de IconSelector)
const ICON_OPTIONS = [
  'dropLeftIcon',
  'dropRightIcon',
  'download1Icon',
  'upload1Icon',
  'closeIcon',
  'plusIcon',
  'minusIcon',
  'infoIcon',
  'warningIcon',
  'checkIcon',
  'checkedIcon',
  'home2Icon',
  'statusIcon',
  'arrowSubDownLeftIcon',
  'arrowSubDownRightIcon',
  'dropDownIcon',
];

export default {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    controls: { expanded: true },
    docs: {
      description: {
        component: `
Componente Button flexible con múltiples opciones de configuración de iconos:

**Prioridad de control de iconos:**
1. \`isGroup === true\` → oculta ambos iconos
2. \`iconSide\` ('both' | 'left' | 'right' | 'none') domina sobre \`showLeftIcon\`/\`showRightIcon\`
3. Si hay \`iconName\` y NO hay \`iconSide\`, \`iconPosition\` ('left'|'right') decide un único lado
4. Si no hay \`iconName\`, usa \`leftIconName\`/\`rightIconName\` según \`showLeftIcon\`/\`showRightIcon\`
        `,
      },
      // Snippet en Docs con los args actuales
      transformSource: (src, ctx) => {
        const a = ctx.args || {};
        const fmt = (k, v) => {
          if (typeof v === 'boolean') return `  ${k}={${v}}`;
          if (v === undefined) return `  ${k}={undefined}`;
          if (v === null) return `  ${k}={null}`;
          if (typeof v === 'number') return `  ${k}={${v}}`;
          return `  ${k}="${v}"`;
        };
        return `<Button
${fmt('text', a.text)}
${fmt('variant', a.variant)}
${fmt('size', a.size)}
${fmt('disabled', a.disabled)}
${fmt('isGroup', a.isGroup)}
${fmt('iconSide', a.iconSide)}
${fmt('iconName', a.iconName)}
${fmt('iconPosition', a.iconPosition)}
${fmt('showLeftIcon', a.showLeftIcon)}
${fmt('showRightIcon', a.showRightIcon)}
${fmt('leftIconName', a.leftIconName)}
${fmt('rightIconName', a.rightIconName)}
${fmt('iconSize', a.iconSize)}
${fmt('iconColor', a.iconColor)}
${fmt('type', a.type)}
/>`;
      },
    },
  },
  argTypes: {
    // Contenido
    text: {
      control: 'text',
      description: 'Texto mostrado en el botón',
      table: { type: { summary: 'string' } },
    },

    // Apariencia
    variant: {
      control: { type: 'select' },
      options: ['btn-primary', 'btn-secondary', 'btn-tertiary', 'btn-error', 'btn-text'],
      description: 'Variante visual del botón',
      table: { type: { summary: 'string' }, defaultValue: { summary: 'btn-primary' } },
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
      description: 'Tamaño del botón',
      table: { type: { summary: 'string' }, defaultValue: { summary: 'medium' } },
    },

    // Estado/comportamiento
    disabled: {
      control: 'boolean',
      description: 'Estado deshabilitado del botón',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    isGroup: {
      control: 'boolean',
      description: 'Si es `true`, oculta ambos iconos (uso dentro de ButtonGroup).',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },

    // Control de iconos - Shorthand
    iconSide: {
      control: { type: 'select' },
      options: [undefined, 'both', 'left', 'right', 'none'],
      description: 'Control shorthand de iconos. Domina sobre showLeftIcon/showRightIcon.',
      table: { type: { summary: 'string' }, defaultValue: { summary: 'undefined' } },
    },
    iconName: {
      control: { type: 'select' },
      options: [undefined, ...ICON_OPTIONS],
      description: 'Nombre único de icono para ambos lados (o uno según iconPosition).',
      table: { type: { summary: 'string' }, defaultValue: { summary: 'undefined' } },
    },
    iconPosition: {
      control: { type: 'select' },
      options: ['left', 'right'],
      description: 'Posición cuando se usa iconName sin iconSide.',
      table: { type: { summary: 'string' }, defaultValue: { summary: 'left' } },
    },

    // Control fino de iconos - Individual
    showLeftIcon: {
      control: 'boolean',
      description: 'Muestra el ícono izquierdo cuando `isGroup` es `false`.',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'true' } },
    },
    showRightIcon: {
      control: 'boolean',
      description: 'Muestra el ícono derecho cuando `isGroup` es `false`.',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'true' } },
    },
    leftIconName: {
      control: { type: 'select' },
      options: ICON_OPTIONS,
      description: 'Nombre del ícono izquierdo (debe existir en IconSelector).',
      table: { type: { summary: 'string' }, defaultValue: { summary: 'dropLeftIcon' } },
    },
    rightIconName: {
      control: { type: 'select' },
      options: ICON_OPTIONS,
      description: 'Nombre del ícono derecho (debe existir en IconSelector).',
      table: { type: { summary: 'string' }, defaultValue: { summary: 'dropRightIcon' } },
    },

    // Propiedades de iconos
    iconSize: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
      description: 'Tamaño del ícono (mapeado por tu IconSelector).',
      table: { type: { summary: 'string' }, defaultValue: { summary: 'medium' } },
    },
    iconColor: {
      control: 'text',
      description: 'Color del ícono (cualquier valor CSS válido, ej. "currentColor", "#333").',
      table: { type: { summary: 'string' }, defaultValue: { summary: 'currentColor' } },
    },

    // Eventos
    onClick: {
      action: 'clicked',
      description: 'Función ejecutada al hacer clic',
      table: { type: { summary: 'function' } },
    },

    // Props HTML
    type: {
      control: { type: 'select' },
      options: ['button', 'submit', 'reset'],
      description: 'Atributo HTML `type` del botón.',
      table: { type: { summary: 'string' }, defaultValue: { summary: 'button' } },
    },
    className: {
      control: 'text',
      description: 'Clases CSS adicionales para personalización.',
      table: { type: { summary: 'string' } },
    },
  },
  args: {
    variant: 'btn-primary',
    size: 'medium',
    text: 'Button',
    disabled: false,
    isGroup: false,
    showLeftIcon: true,
    showRightIcon: true,
    leftIconName: 'dropLeftIcon',
    rightIconName: 'dropRightIcon',
    iconSize: 'medium',
    iconColor: 'currentColor',
    iconPosition: 'left',
    type: 'button',
  },
};

// Historia por defecto
export const Default = {
  name: 'Default',
  args: { text: 'Default Button' },
};

// Variantes (sin iconos para ver solo estilo)
export const Variants = {
  render: (args) => (
    <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', alignItems: 'center' }}>
      <Button {...args} variant="btn-primary" text="Primary" showLeftIcon={false} showRightIcon={false} />
      <Button {...args} variant="btn-secondary" text="Secondary" showLeftIcon={false} showRightIcon={false} />
      <Button {...args} variant="btn-tertiary" text="Tertiary" showLeftIcon={false} showRightIcon={false} />
      <Button {...args} variant="btn-error" text="Error" showLeftIcon={false} showRightIcon={false} />
      <Button {...args} variant="btn-text" text="Text" showLeftIcon={false} showRightIcon={false} />
    </div>
  ),
  parameters: { docs: { description: { story: 'Todas las variantes disponibles del botón.' } } },
};

Variants.storyName = "Variantes";

// Tamaños (sin iconos para no distraer)
export const Sizes = {
  render: (args) => (
    <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
      <Button {...args} variant="btn-primary" size="small" text="Small" showLeftIcon={false} showRightIcon={false} />
      <Button {...args} variant="btn-primary" size="medium" text="Medium" showLeftIcon={false} showRightIcon={false} />
      <Button {...args} variant="btn-primary" size="large" text="Large" showLeftIcon={false} showRightIcon={false} />
    </div>
  ),
  parameters: { docs: { description: { story: 'Diferentes tamaños disponibles para el botón.' } } },
};

Sizes.storyName = "Tamaños";

// Control con iconSide (método shorthand)
export const IconSideControl = {
  name: 'Control con iconSide (shorthand)',
  render: (args) => (
    <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', alignItems: 'center' }}>
      <Button {...args} text="Both" iconSide="both" iconName="checkIcon" />
      <Button {...args} text="Left" iconSide="left" iconName="download1Icon" />
      <Button {...args} text="Right" iconSide="right" iconName="upload1Icon" />
      <Button {...args} text="None" iconSide="none" iconName="closeIcon" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Usando la prop `iconSide` para controlar qué iconos mostrar. Esta prop tiene prioridad sobre `showLeftIcon`/`showRightIcon`.',
      },
    },
  },
};

IconSideControl.storyName = "Control de icono";

// Control con iconName e iconPosition
export const IconNamePosition = {
  name: 'iconName + iconPosition',
  render: (args) => (
    <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
      <Button {...args} text="Left Position" iconName="infoIcon" iconPosition="left" />
      <Button {...args} text="Right Position" iconName="infoIcon" iconPosition="right" />
    </div>
  ),
  parameters: {
    docs: { description: { story: 'Usando `iconName` con `iconPosition` para colocar un mismo icono en diferentes posiciones.' } },
  },
};

IconNamePosition.storyName = "Posición de icono";

// Control individual de iconos
export const IndividualIconControl = {
  name: 'Control individual de iconos',
  render: (args) => (
    <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', alignItems: 'center' }}>
      <Button {...args} text="Solo izquierdo" showLeftIcon={true} showRightIcon={false} leftIconName="download1Icon" />
      <Button {...args} text="Solo derecho" showLeftIcon={false} showRightIcon={true} rightIconName="upload1Icon" />
      <Button {...args} text="Ambos diferentes" showLeftIcon={true} showRightIcon={true} leftIconName="minusIcon" rightIconName="plusIcon" />
      <Button {...args} text="Sin iconos" showLeftIcon={false} showRightIcon={false} />
    </div>
  ),
  parameters: {
    docs: { description: { story: 'Control granular usando `showLeftIcon`, `showRightIcon`, `leftIconName` y `rightIconName`.' } },
  },
};

IndividualIconControl.storyName = "Control individual de icono";

// Historias BLINDADAS: solo texto + icono izquierdo / derecho
export const TextWithLeftIconOnly = {
  name: 'Con ícono izquierdo',
  args: {
    text: 'Icono izquierdo',
    isGroup: false,
    iconSide: 'left',      // domina sobre showLeftIcon/showRightIcon
    showLeftIcon: true,    // redundante pero explícito
    showRightIcon: false,  // redundante pero explícito
    leftIconName: 'download1Icon',
    iconSize: 'medium',
    iconColor: 'currentColor',
    type: 'button',
    variant: 'btn-primary',
    size: 'medium',
  },
  parameters: {
    docs: {
      source: {
        code: `<Button
  text="Icono izquierdo"
  isGroup={false}
  iconSide="left"
  showLeftIcon={true}
  showRightIcon={false}
  leftIconName="download1Icon"
  iconSize="medium"
  iconColor="currentColor"
  type="button"
  variant="btn-primary"
  size="medium"
/>`,
      },
      description: {
        story: 'Forzamos únicamente el icono izquierdo usando `iconSide="left"` y apagamos el derecho. Evita herencias indeseadas de args globales.',
      },
    },
  },
};

export const TextWithRightIconOnly = {
  name: 'Con ícono derecho',
  args: {
    text: 'Icono derecho',
    isGroup: false,
    iconSide: 'right',
    showLeftIcon: false,
    showRightIcon: true,
    rightIconName: 'dropDownIcon',
    iconSize: 'medium',
    iconColor: 'currentColor',
    type: 'button',
    variant: 'btn-primary',
    size: 'medium',
  },
  parameters: {
    docs: {
      source: {
        code: `<Button
  text="Icono derecho"
  isGroup={false}
  iconSide="right"
  showLeftIcon={false}
  showRightIcon={true}
  rightIconName="dropDownIcon"
  iconSize="medium"
  iconColor="currentColor"
  type="button"
  variant="btn-primary"
  size="medium"
/>`,
      },
      description: {
        story: 'Forzamos únicamente el icono derecho usando `iconSide="right"` y apagamos el izquierdo.',
      },
    },
  },
};

// En ButtonGroup
export const InGroup = {
  name: 'En grupo',
  args: {
    text: 'En grupo',
    isGroup: true,
    showLeftIcon: true,  // no se mostrarán debido a isGroup
    showRightIcon: true, // no se mostrarán debido a isGroup
  },
  parameters: { docs: { description: { story: 'Con `isGroup` en `true`, los iconos no se renderizan sin importar otras configuraciones.' } } },
};

// Estados
export const States = {
  render: (args) => (
    <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
      <Button {...args} text="Normal" showLeftIcon={false} showRightIcon={false} />
      <Button {...args} text="Disabled" disabled={true} showLeftIcon={false} showRightIcon={false} />
    </div>
  ),
  parameters: { docs: { description: { story: 'Estados normal y deshabilitado del botón.' } } },
};

States.storyName = "Estados";

// Tamaños de iconos
export const IconSizes = {
  render: (args) => (
    <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
      <Button {...args} text="Small Icons" iconSize="small" leftIconName="checkIcon" rightIconName="closeIcon" />
      <Button {...args} text="Medium Icons" iconSize="medium" leftIconName="checkIcon" rightIconName="closeIcon" />
      <Button {...args} text="Large Icons" iconSize="large" leftIconName="checkIcon" rightIconName="closeIcon" />
    </div>
  ),
  parameters: { docs: { description: { story: 'Diferentes tamaños de iconos disponibles.' } } },
};

IconSizes.storyName = "Tamaño de ícono";

// Ejemplos específicos para debugging
export const DebuggingExamples = {
  name: 'Ejemplos de Debugging',
  render: (args) => (
    <div style={{ display: 'flex', gap: 16, flexDirection: 'column' }}>
      <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
        <span style={{ width: 120, fontSize: 12 }}>Solo izquierdo:</span>
        <Button text="Left Only" showLeftIcon={true} showRightIcon={false} leftIconName="download1Icon" />
      </div>
      <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
        <span style={{ width: 120, fontSize: 12 }}>iconSide="left":</span>
        <Button text="iconSide Left" iconSide="left" iconName="checkIcon" />
      </div>
      <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
        <span style={{ width: 120, fontSize: 12 }}>iconPosition="left":</span>
        <Button text="Position Left" iconName="infoIcon" iconPosition="left" />
      </div>
    </div>
  ),
  parameters: { docs: { description: { story: 'Verificaciones de cada método de control de iconos.' } } },
};


// Playground interactivo
export const Playground = {
  name: 'Pruebas completo',
  args: {
    variant: 'btn-primary',
    size: 'medium',
    text: 'Playground Button',
    disabled: false,
    isGroup: false,
    showLeftIcon: true,
    showRightIcon: false,
    leftIconName: 'dropLeftIcon',
    rightIconName: 'dropRightIcon',
    iconSize: 'medium',
    iconColor: 'currentColor',
    iconPosition: 'left',
    type: 'button',
  },
};
