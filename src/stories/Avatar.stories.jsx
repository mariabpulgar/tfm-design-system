import React from "react";
import Avatar from "../components/molecules/Avatar";

export default {
  title: "Molecules/Avatar",
  component: Avatar,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
  argTypes: {
    src: { control: "text", description: "URL de la imagen" },
    name: { control: "text", description: "Nombre para generar iniciales" },
    alt: { control: "text", description: "Texto alternativo de la imagen" },
    size: {
      control: { type: "select" },
      options: ["xxs", "xs", "s", "m", "l", "xl", "xxl"],
      description: "Token de tamaño del DS. También acepta número (px) desde el código.",
    },
    loading: { control: "boolean", description: "Muestra skeleton de carga" },
    fallback: {
      control: { type: "inline-radio" },
      options: ["initials", "icon"],
      description: "Contenido a mostrar si no hay imagen",
    },
    initials: {
      control: "text",
      description: 'Iniciales a mostrar. Usa "auto" para generarlas desde `name`',
    },
    initialsCount: {
      control: { type: "inline-radio" },
      options: [1, 2],
      description: "Número de letras cuando initials='auto'",
    },
    mode: {
      control: { type: "inline-radio" },
      options: ["img", "bg"],
      description: "Renderizar imagen con <img> (img) o como background cover (bg)",
    },
    className: { control: false },
  },
};

const Template = (args) => <Avatar {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: "Ana Álvarez",
  size: "m",
  fallback: "initials",
  initials: "auto",
  initialsCount: 2,
  mode: "img",
};

export const WithImageImgTag = Template.bind({});
WithImageImgTag.args = {
  src: "https://images.unsplash.com/photo-1544006659-f0b21884ce1d?w=400&q=80",
  name: "Ana Álvarez",
  alt: "Foto de Ana Álvarez",
  size: "l",
  mode: "img",
};

export const WithImageBackground = Template.bind({});
WithImageBackground.args = {
  src: "https://images.unsplash.com/photo-1544006659-f0b21884ce1d?w=400&q=80",
  name: "Ana Álvarez",
  alt: "Foto de Ana Álvarez",
  size: "l",
  mode: "bg",
};

export const Loading = Template.bind({});
Loading.args = { size: "m", loading: true };

export const IconFallback = Template.bind({});
IconFallback.args = { size: "m", fallback: "icon", name: "Usuario" };

export const AllSizes = () => (
  <div style={{ display: "flex", gap: 16, alignItems: "flex-end", flexWrap: "wrap" }}>
    {["xxs", "xs", "s", "m", "l", "xl", "xxl"].map((sz) => (
      <div key={sz} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
        <Avatar name="Ana Álvarez" size={sz} />
        <small style={{ color: "#666" }}>{sz}</small>
      </div>
    ))}
  </div>
);
AllSizes.parameters = { controls: { disable: true } };
