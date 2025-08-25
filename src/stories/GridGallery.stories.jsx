// src/stories/GridGallery.stories.jsx
import React, { useState } from "react";
import GridGallery from "../components/GridGallery";

// Importa el CSS del layout si NO lo cargas globalmente en preview
import "../components/GridGallery.css";

// Assets
import perrito from "../assets/perrito.jpg";
import elipse from "../assets/elipse.png";
import logoColor from "../assets/Logo_FACP_Color.svg";
import line3 from "../assets/Line3.jpg";
import rect979 from "../assets/Rectangle979.svg";
import rect982 from "../assets/Rectangle982.svg";

const IMAGES = [
  { src: perrito, alt: "Perrito feliz", id: 1 },
  { src: elipse, alt: "Elipse decorativa", id: 2 },
  { src: logoColor, alt: "Logo FACP a color", id: 3 },
  { src: line3, alt: "Foto Line3", id: 4 },
  { src: rect979, alt: "Rectángulo 979", id: 5 },
  { src: rect982, alt: "Rectángulo 982", id: 6 },
  { src: perrito, alt: "Perrito 2", id: 7 },
  { src: elipse, alt: "Elipse 2", id: 8 },
  { src: logoColor, alt: "Logo 2", id: 9 },
  { src: line3, alt: "Line3 2", id: 10 },
  { src: rect979, alt: "Rectángulo 979 (2)", id: 11 },
  { src: rect982, alt: "Rectángulo 982 (2)", id: 12 },
];

export default {
  title: "Components/GridGallery",
  component: GridGallery,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Galería paginada (6 por página) con patrón de tamaños y layout definidos por CSS externo. Permite modo controlado (page) o no controlado (defaultPage).",
      },
    },
  },
  argTypes: {
    images: { control: "object", description: "Array de imágenes { src, alt?, id?, variant? }" },
    pageSize: { control: { type: "number", min: 1 }, description: "Cantidad por página (default 6)" },
    page: { control: { type: "number", min: 1 }, description: "Página actual (modo controlado)" },
    defaultPage: { control: { type: "number", min: 1 }, description: "Página inicial (no controlado)" },
    showTitle: { control: "boolean", description: "Muestra/oculta el título superior" },
    title: {
      control: "text",
      description:
        "Título (string). También acepta función (current, total) => string (no controlable desde UI).",
    },
    largePositions: {
      control: "object",
      description: 'Posición de la imagen grande por fila. Ej: ["left","right"]',
    },
    variantPattern: {
      control: "object",
      description: "Patrón de variantes por posición (se usa si el item no trae variant)",
    },
    // Pagination passthrough
    paginationSize: {
      control: { type: "select" },
      options: ["small", "medium", "large", "extraLarge", "display"],
      description: "Tamaño de los botones de paginación",
    },
    siblingCount: { control: { type: "number", min: 0, max: 3 }, description: "Vecinos a cada lado" },
    boundaryCount: { control: { type: "number", min: 0, max: 3 }, description: "Páginas fijas al inicio/fin" },
    showPrevNext: { control: "boolean", description: "Muestra botones anterior/siguiente" },
    prevIcon: { control: "text", description: "Nombre del ícono para «anterior»" },
    nextIcon: { control: "text", description: "Nombre del ícono para «siguiente»" },
    arrowVariant: {
      control: { type: "select" },
      options: ["pagination", "default", "primary", "secondary", "tertiary", "error", "text"],
      description: "Variant del IconButton de flechas",
    },
  },
};

const Template = (args) => <GridGallery {...args} />;

export const Default = Template.bind({});
Default.args = {
  images: IMAGES,
  pageSize: 6,
  showTitle: true,
  title: "Galería FACP",
  siblingCount: 1,
  boundaryCount: 1,
  showPrevNext: true,
};

export const ManyPages = Template.bind({});
ManyPages.storyName = "Con muchas páginas";
ManyPages.args = {
  images: [...IMAGES, ...IMAGES, ...IMAGES], // duplica para probar elipsis
  pageSize: 6,
  showTitle: true,
  title: (current, total) => `Galería — Página ${current} de ${total}`,
  siblingCount: 1,
  boundaryCount: 1,
  showPrevNext: true,
};

export const Controlled = {
  args: {
    images: [...IMAGES, ...IMAGES],
    pageSize: 6,
    showTitle: true,
  },
  render: (args) => {
    const [page, setPage] = useState(2);
    return (
      <GridGallery
        {...args}
        page={page}
        onPageChange={setPage}
        title={(current, total) => `Controlado — Página ${current} de ${total}`}
      />
    );
  },
};

export const CustomPattern = Template.bind({});
CustomPattern.storyName = "Patrón y posiciones personalizados";
CustomPattern.args = {
  images: IMAGES,
  pageSize: 6,
  variantPattern: [
    "img-grid-gallery-small",
    "img-grid-gallery-large",
    "img-grid-gallery-small",
    "img-grid-gallery-large",
    "img-grid-gallery-small",
    "img-grid-gallery-small",
  ],
  largePositions: ["right", "left"],
  showTitle: true,
  title: "Patrón alternado",
  siblingCount: 1,
  boundaryCount: 1,
  showPrevNext: true,
};
