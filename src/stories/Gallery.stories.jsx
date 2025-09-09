// src/stories/Gallery.stories.jsx
import React from "react";
import Gallery from "../components/organisms/Gallery";

// Importa tus imágenes
import perrito from "../assets/perrito.jpg";
import elipse from "../assets/elipse.png";
import loguito from "../assets/Logo_FACP_Color.svg";

export default {
  title: "Organisms/Gallery",
  component: Gallery,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    controls: { expanded: true },
    docs: {
      description: {
        component: `
Galería de producto con imagen principal, miniaturas clicables y panel de información fija (título + descripción).  
Incluye navegación con botón (Anterior/Siguiente).  

**Accesibilidad:**  
- Miniaturas como botones para soporte de teclado.  
- La línea divisoria se marca \`aria-hidden="true"\` cuando se usa como elemento decorativo.  
        `,
      },
    },
  },
  argTypes: {
    title: {
      control: "text",
      description: "Título que se muestra en la columna derecha.",
      table: { category: "Content" },
    },
    description: {
      control: "text",
      description: "Descripción que se muestra bajo el título.",
      table: { category: "Content" },
    },
    images: {
      control: "object",
      description:
        "Arreglo de objetos `{ src: string, alt?: string }` para la imagen principal y las miniaturas.",
      table: {
        type: { summary: "Array<{ src: string; alt?: string }>" },
        category: "Data",
      },
    },
  },
};

const Template = (args) => (
  <div style={{ maxWidth: 820 }}>
    <Gallery {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  title: "Galería de prueba",
  description:
    "Ejemplo de galería con tres imágenes personalizadas y una repetida.",
  images: [
    { src: perrito, alt: "Foto de un perrito feliz" },
    { src: elipse, alt: "Gráfico de elipse decorativa" },
    { src: loguito, alt: "Logo de la Fundación Ángeles con Patas" },
    { src: perrito, alt: "Foto repetida del perrito" }, // repetida
  ],
};