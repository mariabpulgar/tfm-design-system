import React from "react";
import Pagination from "../components/Pagination";
import "../components/IconButton.css";
import "../components/Pagination.css";

export default {
  title: "Components/Pagination",
  component: Pagination,
  tags: ['autodocs'], // ← ESTO ES LO CLAVE
  parameters: {
    layout: "centered",
    controls: { expanded: true },
    docs: {
      description: {
        component: `
Componente de paginación que reutiliza **exclusivamente** el estilo del botón numérico (\`IconButton\` con \`variant='pagination'\`).

### Características

- Botones cuadrados numéricos con estilo consistente
- Soporte para navegación con flechas prev/next
- Configuración flexible de páginas visibles (siblings y boundaries)
- Tres tamaños disponibles: small, medium, large
- Estado deshabilitado para toda la paginación
- Callback onChange para manejar cambios de página

### Ejemplo de uso

\`\`\`jsx
<Pagination
  totalPages={10}
  page={1}
  size="medium"
  onChange={(page) => console.log('Nueva página:', page)}
/>
\`\`\`
        `,
      },
    },
  },
  argTypes: {
    totalPages: {
      control: { type: "number", min: 1, max: 50, step: 1 },
      description: "Número total de páginas disponibles",
      table: {
        type: { summary: "number" },
        defaultValue: { summary: "5" },
      },
    },
    page: {
      control: { type: "number", min: 1 },
      description: "Página actual activa (componente controlado)",
      table: {
        type: { summary: "number" },
        defaultValue: { summary: "1" },
      },
    },
    size: {
      control: { type: "inline-radio" },
      options: ["small", "medium", "large"],
      description: "Tamaño de los botones de paginación",
      table: {
        type: { summary: '"small" | "medium" | "large"' },
        defaultValue: { summary: '"medium"' },
      },
    },
    siblingCount: {
      control: { type: "number", min: 0, max: 3, step: 1 },
      description: "Número de páginas hermanas mostradas a cada lado de la página actual",
      table: {
        type: { summary: "number" },
        defaultValue: { summary: "1" },
      },
    },
    boundaryCount: {
      control: { type: "number", min: 0, max: 2, step: 1 },
      description: "Número de páginas mostradas al inicio y final",
      table: {
        type: { summary: "number" },
        defaultValue: { summary: "1" },
      },
    },
    showPrevNext: {
      control: "boolean",
      description: "Mostrar botones de navegación anterior (‹) y siguiente (›)",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    arrowVariant: {
      control: { type: "inline-radio" },
      options: ["pagination", "default"],
      description: "Variante visual para los botones de flecha",
      table: {
        type: { summary: '"pagination" | "default"' },
        defaultValue: { summary: '"pagination"' },
      },
    },
    disabled: {
      control: "boolean",
      description: "Deshabilita toda la paginación",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    onChange: {
      action: "page-changed",
      description: "Callback ejecutado cuando cambia la página",
      table: {
        type: { summary: "(page: number) => void" },
      },
    },
  },
  args: {
    totalPages: 10,
    page: 3,
    size: "medium",
    siblingCount: 1,
    boundaryCount: 1,
    showPrevNext: true,
    arrowVariant: "pagination",
    disabled: false,
  },
};

// Historia principal (Playground)
export const Default = {
  render: (args) => {
    const [currentPage, setCurrentPage] = React.useState(args.page);
    
    // Sincronizar con cambios en controls
    React.useEffect(() => {
      setCurrentPage(args.page);
    }, [args.page]);

    return (
      <Pagination
        {...args}
        page={currentPage}
        onChange={(nextPage) => {
          setCurrentPage(nextPage);
          args.onChange?.(nextPage);
        }}
      />
    );
  },
  parameters: {
    docs: {
      description: {
        story: "Implementación interactiva principal con estado controlado. Puedes cambiar las propiedades usando los controles para ver cómo afectan el comportamiento.",
      },
    },
  },
};

// Variaciones para mostrar diferentes configuraciones
export const SmallSize = {
  name: 'Tamaño pequeño',
  args: {
    size: "small",
    totalPages: 8,
    page: 4,
  },
  parameters: {
    docs: {
      description: {
        story: "Paginación con botones de tamaño pequeño.",
      },
    },
  },
};

export const LargeSize = {
  name: 'Tamaño grande',
  args: {
    size: "large",
    totalPages: 6,
    page: 2,
  },
  parameters: {
    docs: {
      description: {
        story: "Paginación con botones de tamaño grande.",
      },
    },
  },
};

export const WithoutArrows = {
  name: 'Sin flechas',
  args: {
    showPrevNext: false,
    totalPages: 7,
    page: 3,
  },
  parameters: {
    docs: {
      description: {
        story: "Paginación sin botones de navegación anterior/siguiente.",
      },
    },
  },
};

export const ManyPages = {
  name: 'Varias páginas',
  args: {
    totalPages: 50,
    page: 25,
    siblingCount: 2,
    boundaryCount: 2,
  },
  parameters: {
    docs: {
      description: {
        story: "Paginación con muchas páginas, mostrando cómo se comporta con siblingCount y boundaryCount más altos.",
      },
    },
  },
};

export const Disabled = {
  name: 'Deshabilitado',
  args: {
    disabled: true,
    totalPages: 5,
    page: 2,
  },
  parameters: {
    docs: {
      description: {
        story: "Paginación en estado deshabilitado.",
      },
    },
  },
};

// Para que funcione el Playground en la antigua configuración
export const Playground = Default;