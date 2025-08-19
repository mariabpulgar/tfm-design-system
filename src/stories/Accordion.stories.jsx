import React from "react";
import Accordion from "../components/Accordion";

export default {
  title: "Components/Accordion",
  component: Accordion,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
  argTypes: {
    items: {
      control: "object",
      description: "Array de objetos con `title` y `content` para cada item",
      table: {
        type: { summary: "Array<{ title: string, content: string | React.ReactNode }>" },
        defaultValue: { summary: "[]" },
      },
    },
    className: { control: false },
  },
};

const Template = (args) => <Accordion {...args} />;

export const Default = Template.bind({});
Default.args = {
  items: [
    {
      title: "Item 1",
      content:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit luctus, nullam tempor duis potenti litora justo.",
    },
    {
      title: "Item 2",
      content:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit luctus, nullam tempor duis potenti litora justo.",
    },
    {
      title: "Item 3",
      content:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit luctus, nullam tempor duis potenti litora justo.",
    },
  ],
};
Default.parameters = {
  docs: {
    description: {
      story:
        "Accordion básico con 3 items. El componente abre **solo un item a la vez**.",
    },
  },
};

export const CustomContent = Template.bind({});
CustomContent.args = {
  items: [
    {
      title: "¿Qué es React?",
      content:
        "React es una biblioteca de JavaScript para construir interfaces de usuario, especialmente SPA con manejo rápido de estado.",
    },
    {
      title: "¿Cómo funciona el estado?",
      content:
        "El estado determina cómo se renderiza el componente. Al cambiar, React vuelve a renderizar automáticamente.",
    },
    {
      title: "¿Qué son los hooks?",
      content:
        "Funciones que permiten usar estado y otras features en componentes funcionales. `useState` y `useEffect` son los más comunes.",
    },
  ],
};
CustomContent.parameters = {
  docs: {
    description: {
      story:
        "Ejemplo con contenido personalizado. Perfecto para documentación y FAQs.",
    },
  },
};

export const WithHTMLContent = Template.bind({});
WithHTMLContent.args = {
  items: [
    {
      title: "Características del Producto",
      content: (
        <div>
          <p><strong>Especificaciones técnicas:</strong></p>
          <ul>
            <li>Procesador: Intel Core i7</li>
            <li>Memoria: 16GB RAM</li>
            <li>Almacenamiento: 512GB SSD</li>
          </ul>
        </div>
      ),
    },
    {
      title: "Garantía y Soporte",
      content: (
        <div>
          <p>Incluye:</p>
          <ul>
            <li>✅ Garantía de 2 años</li>
            <li>✅ Soporte técnico 24/7</li>
            <li>✅ Actualizaciones gratuitas</li>
          </ul>
        </div>
      ),
    },
    {
      title: "Contacto",
      content: (
        <div>
          <p>¿Necesitas más información?</p>
          <p>📧 <a href="mailto:info@ejemplo.com">info@ejemplo.com</a></p>
          <p>📞 +1 (555) 123-4567</p>
        </div>
      ),
    },
  ],
};
WithHTMLContent.parameters = {
  docs: {
    description: {
      story:
        "Demuestra soporte para contenido HTML/JSX enriquecido (listas, enlaces, etc.).",
    },
  },
};

export const LongContent = Template.bind({});
LongContent.args = {
  items: [
    {
      title: "Historia de la Empresa",
      content:
        "Nuestra empresa fue fundada en 1995... (texto largo para probar overflow y animación).",
    },
    {
      title: "Valores y Misión",
      content:
        "Creemos en innovación responsable, sostenibilidad e impacto social positivo...",
    },
    {
      title: "Visión de Futuro",
      content:
        "Invertimos en IA, computación cuántica y tecnologías sostenibles para liderar la industria...",
    },
  ],
};
LongContent.parameters = {
  docs: {
    description: {
      story:
        "Contenido extenso para verificar la transición `max-height` y la legibilidad.",
    },
  },
};

export const Interactive = Template.bind({});
Interactive.args = {
  items: [
    {
      title: "Prueba la Interactividad",
      content:
        "Haz clic para expandir y vuelve a hacer clic para contraer. Solo un item permanece abierto a la vez.",
    },
    {
      title: "Accesibilidad",
      content:
        "El header usa `aria-expanded` y `aria-controls` y el panel `role=\"region\"` + `aria-labelledby`.",
    },
    {
      title: "Diseño",
      content:
        "La animación usa `max-height` con transición. Ajusta los tokens de color y tipografía desde el DS.",
    },
  ],
};
Interactive.parameters = {
  docs: {
    description: {
      story:
        "Historia pensada para testing manual (apertura/cierre, foco, y comportamiento de un-solo-item-abierto).",
    },
  },
};
