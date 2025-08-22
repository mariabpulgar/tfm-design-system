import Footer from "../components/Footer";

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
  args: {
    title: "Tittle page",
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
      src: "",
      alt: "Logo",
    },
    year: 2025,
    backToTop: { label: "Back to top", href: "#top", icon: "topIcon" },
  },
};