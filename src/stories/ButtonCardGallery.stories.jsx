import React from "react";
import ButtonCardGallery from "../components/ButtonCardGallery";
import rectangle from "../assets/Rectangle979.svg";

export default {
  title: "Components/ButtonCardGallery",
  component: ButtonCardGallery,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    controls: { expanded: true },
    docs: {
      description: {
        component:
          "Card horizontal con galería de imagen principal y 4 miniaturas para previsualizar.",
      },
    },
  },
  argTypes: {
    title: { control: "text" },
    description: { control: "text" },
    buttonText: { control: "text" },
    buttonVariant: { control: "text" },
    buttonSize: { control: { type: "inline-radio" }, options: ["small", "medium", "large"] },
    buttonType: { control: { type: "inline-radio" }, options: ["button", "submit", "reset"] },
    images: { control: "object" },
    imageFit: { control: { type: "inline-radio" }, options: ["cover", "contain"] },
    onButtonClick: { action: "clicked" },
  },
  args: {
    title: "Título",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    buttonText: "Button",
    images: [
      { src: rectangle, alt: "img 1" },
      { src: rectangle, alt: "img 2" },
      { src: rectangle, alt: "img 3" },
      { src: rectangle, alt: "img 4" },
    ],
  },
};

export const Default = {};

