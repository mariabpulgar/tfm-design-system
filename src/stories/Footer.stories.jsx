import Footer from "../components/Footer";
import logoImg from "../assets/Logo_FACP_Blanco_v2.svg";

const meta = {
  title: "Layout/Footer",
  tags: ['autodocs'],
  component: Footer,
  parameters: {
    layout: "fullscreen",
  },
};
export default meta;

export const Basico = {
  name: 'Básico',
  args: {
    title: "Título de página",
    navLinks: [
      { label: "Link item", href: "#" },
      { label: "Link item", href: "#" },
      { label: "Link item", href: "#" },
    ],
    utilityLinks: [
      { label: "Contact us", href: "#" },
      { label: "Feedback", href: "#" },
    ],
    socials: [
      { name: "instagramAIcon", label: "Instagram", href: "#" },
      { name: "whatsappAIcon", label: "WhatsApp", href: "#" },
      { name: "facebookAIcon", label: "Facebook", href: "#" },
      { name: "tiktokAIcon", label: "TikTok", href: "#" },
    ],
    logo: {
      src: logoImg,
      alt: "Logo",
    },
    year: 2025,
    backToTop: { label: "Ir arriba", href: "#top", icon: "topIcon" },
  },
};