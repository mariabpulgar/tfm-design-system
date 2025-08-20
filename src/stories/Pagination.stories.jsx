import React from "react";
import Pagination from "../components/Pagination";
import "../components/IconButton.css";
import "../components/Pagination.css";

export default {
  title: "Components/Pagination",
  component: Pagination,
  parameters: {
    layout: "centered",
    controls: { expanded: true },
    docs: {
      description: {
        component:
          "Paginación que reutiliza **exclusivamente** el estilo del botón numérico (`IconButton` con `variant='pagination'`).",
      },
    },
  },
  argTypes: {
    totalPages: { control: { type: "number", min: 1 }, description: "Total de páginas" },
    page: { control: { type: "number", min: 1 }, description: "Página actual (controlada)" },
    size: {
      control: { type: "inline-radio" },
      options: ["small", "medium", "large"],
      description: "Tamaño de los botones (cuadrados)",
    },
    siblingCount: { control: { type: "number", min: 0, max: 3, step: 1 } },
    boundaryCount: { control: { type: "number", min: 0, max: 2, step: 1 } },
    showPrevNext: { control: "boolean", description: "Mostrar ‹ y › (también cuadrados numéricos)" },
    disabled: { control: "boolean" },
    onChange: { action: "changed" },
  },
  args: {
    totalPages: 5,
    page: 2,
    size: "medium",
    siblingCount: 2,
    boundaryCount: 1,
    showPrevNext: false,
    disabled: false,
  },
};

export const Playground = (args) => {
  const [p, setP] = React.useState(args.page);
  React.useEffect(() => setP(args.page), [args.page]);

  return (
    <Pagination
      {...args}
      showPrevNext={true}      // ← activa flechas
      arrowVariant="pagination"// ← mismo estilo cuadrado
      page={p}
      onChange={(next) => {
        setP(next);
        args.onChange?.(next);
      }}
    />
  );
};