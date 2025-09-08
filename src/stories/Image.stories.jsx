// src/stories/Image.stories.jsx
import Image from '../components/atoms/Image.jsx';
import '../components/atoms/Image.css';
import '../App.css'

export default {
  title: 'Atoms/Image',
  component: Image,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    controls: { expanded: true },
    docs: {
      description: {
        component:
          'Componente de imagen con **wrapper** y variantes de tamaño/forma aplicadas como clases CSS sobre el contenedor. Incluye soporte para `fallbackSrc` cuando `src` falla.',
      },
      source: { state: 'open' }, // bloque de código visible por defecto
    },
  },
  argTypes: {
    src: {
      control: 'text',
      description: 'Fuente de la imagen (URL o import local).',
    },
    alt: {
      control: 'text',
      description: 'Texto alternativo para accesibilidad.',
    },
    variant: {
      control: { type: 'select' },
      options: [
        '', // sin variante (solo wrapper base)
        'img-simpleCard-horizontal',
        'img-simpleCard-vertical',
        'img-buttonCard-horizontal',
        'img-buttonCard-vertical',
        'img-gallery-principal',
        'img-gallery-mini',
        'img-grid-gallery-large',
        'img-grid-gallery-small',
        'img-testimonial',
        'img-partners',
      ],
      description:
        'Clase CSS aplicada al contenedor para controlar ancho/alto/bordes.',
      table: { category: 'Estilo' },
    },
    fallbackSrc: {
      control: 'text',
      description:
        'Imagen de respaldo en caso de error al cargar `src` (requiere handler `onError`).',
    },
  },
};

/** Story principal con controles */
export const Playground = {
  args: {
    src: 'https://placehold.co/600x400',
    alt: 'Placeholder image',
    variant: '',
    fallbackSrc: 'https://placehold.co/600x400?text=Fallback',
  },
  parameters: {
    docs: {
      source: {
        code: `<Image
  src="https://placehold.co/600x400"
  alt="Placeholder image"
  variant=""
  fallbackSrc="https://placehold.co/600x400?text=Fallback"
/>`,
      },
    },
  },
};

/** Historias por variante */
export const SimpleCardHorizontal = {
  name: 'img-simpleCard-horizontal',
  args: {
    src: 'https://placehold.co/300x200',
    alt: 'SimpleCard horizontal',
    variant: 'img-simpleCard-horizontal',
    fallbackSrc: 'https://placehold.co/300x200?text=Fallback',
  },
  parameters: {
    docs: {
      source: {
        code: `<Image
  src="https://placehold.co/300x200"
  alt="SimpleCard horizontal"
  variant="img-simpleCard-horizontal"
  fallbackSrc="https://placehold.co/300x200?text=Fallback"
/>`,
      },
    },
  },
};

export const SimpleCardVertical = {
  name: 'img-simpleCard-vertical',
  args: {
    src: 'https://placehold.co/182x110',
    alt: 'SimpleCard vertical',
    variant: 'img-simpleCard-vertical',
    fallbackSrc: 'https://placehold.co/182x110?text=Fallback',
  },
  parameters: {
    docs: {
      source: {
        code: `<Image
  src="https://placehold.co/182x110"
  alt="SimpleCard vertical"
  variant="img-simpleCard-vertical"
  fallbackSrc="https://placehold.co/182x110?text=Fallback"
/>`,
      },
    },
  },
};

export const ButtonCardHorizontal = {
  name: 'img-buttonCard-horizontal',
  args: {
    src: 'https://placehold.co/300x200',
    alt: 'ButtonCard horizontal',
    variant: 'img-buttonCard-horizontal',
    fallbackSrc: 'https://placehold.co/300x200?text=Fallback',
  },
  parameters: {
    docs: {
      source: {
        code: `<Image
  src="https://placehold.co/300x200"
  alt="ButtonCard horizontal"
  variant="img-buttonCard-horizontal"
  fallbackSrc="https://placehold.co/300x200?text=Fallback"
/>`,
      },
    },
  },
};

export const ButtonCardVertical = {
  name: 'img-buttonCard-vertical',
  args: {
    src: 'https://placehold.co/182x142',
    alt: 'ButtonCard vertical',
    variant: 'img-buttonCard-vertical',
    fallbackSrc: 'https://placehold.co/182x142?text=Fallback',
  },
  parameters: {
    docs: {
      source: {
        code: `<Image
  src="https://placehold.co/182x142"
  alt="ButtonCard vertical"
  variant="img-buttonCard-vertical"
  fallbackSrc="https://placehold.co/182x142?text=Fallback"
/>`,
      },
    },
  },
};

export const GalleryPrincipal = {
  name: 'img-gallery-principal',
  args: {
    src: 'https://placehold.co/200x200',
    alt: 'Gallery principal',
    variant: 'img-gallery-principal',
    fallbackSrc: 'https://placehold.co/200x200?text=Fallback',
  },
  parameters: {
    docs: {
      source: {
        code: `<Image
  src="https://placehold.co/200x200"
  alt="Gallery principal"
  variant="img-gallery-principal"
  fallbackSrc="https://placehold.co/200x200?text=Fallback"
/>`,
      },
    },
  },
};

export const GalleryMini = {
  name: 'img-gallery-mini',
  args: {
    src: 'https://placehold.co/46x46',
    alt: 'Gallery mini',
    variant: 'img-gallery-mini',
    fallbackSrc: 'https://placehold.co/46x46?text=Fallback',
  },
  parameters: {
    docs: {
      source: {
        code: `<Image
  src="https://placehold.co/46x46"
  alt="Gallery mini"
  variant="img-gallery-mini"
  fallbackSrc="https://placehold.co/46x46?text=Fallback"
/>`,
      },
    },
  },
};

export const GridGalleryLarge = {
  name: 'img-grid-gallery-large',
  args: {
    src: 'https://placehold.co/400x400',
    alt: 'Grid gallery large',
    variant: 'img-grid-gallery-large',
    fallbackSrc: 'https://placehold.co/400x400?text=Fallback',
  },
  parameters: {
    docs: {
      source: {
        code: `<Image
  src="https://placehold.co/400x400"
  alt="Grid gallery large"
  variant="img-grid-gallery-large"
  fallbackSrc="https://placehold.co/400x400?text=Fallback"
/>`,
      },
    },
  },
};

export const GridGallerySmall = {
  name: 'img-grid-gallery-small',
  args: {
    src: 'https://placehold.co/190x190',
    alt: 'Grid gallery small',
    variant: 'img-grid-gallery-small',
    fallbackSrc: 'https://placehold.co/190x190?text=Fallback',
  },
  parameters: {
    docs: {
      source: {
        code: `<Image
  src="https://placehold.co/190x190"
  alt="Grid gallery small"
  variant="img-grid-gallery-small"
  fallbackSrc="https://placehold.co/190x190?text=Fallback"
/>`,
      },
    },
  },
};

export const Testimonial = {
  name: 'img-testimonial',
  args: {
    src: 'https://placehold.co/300x200',
    alt: 'Testimonial',
    variant: 'img-testimonial',
    fallbackSrc: 'https://placehold.co/300x200?text=Fallback',
  },
  parameters: {
    docs: {
      source: {
        code: `<Image
  src="https://placehold.co/300x200"
  alt="Testimonial"
  variant="img-testimonial"
  fallbackSrc="https://placehold.co/300x200?text=Fallback"
/>`,
      },
    },
  },
};

export const Partners = {
  name: 'img-partners',
  args: {
    src: 'https://placehold.co/80x80',
    alt: 'Partner logo',
    variant: 'img-partners',
    fallbackSrc: 'https://placehold.co/80x80?text=Fallback',
  },
  parameters: {
    docs: {
      source: {
        code: `<Image
  src="https://placehold.co/80x80"
  alt="Partner logo"
  variant="img-partners"
  fallbackSrc="https://placehold.co/80x80?text=Fallback"
/>`,
      },
    },
  },
};
