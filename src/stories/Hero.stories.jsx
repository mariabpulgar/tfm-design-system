// src/stories/Hero.stories.jsx
import React from 'react';
import Hero from '../components/organisms/Hero';
import perrito from '../assets/perrito.jpg'; // ajusta la ruta según tu proyecto

export default {
  title: 'Organisms/Hero',
  component: Hero,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      // 🔑 Cambios para que en Autodocs se vea igual que en Canvas
      inlineStories: false,
      story: { height: '400px' },
      description: {
        component:
          'Sección de Hero con título, subtítulo, botón y contenedor de imagen con máscara SVG. ' +
          '⚠️ Nota: En la vista de **Docs** (autodocs) la máscara SVG puede no mostrarse por limitaciones del renderizado, ' +
          'pero en las historias (Canvas) funciona correctamente.',
      },
      source: { state: 'open' },
    },
  },
  decorators: [
    (Story) => (
      <div
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          background: '#FFF',
          padding: '0 20px',
        }}
      >
        {/* Replica el ancho/alto de .hero-section para asegurar visibilidad de la máscara */}
        <div style={{ width: '100%', maxWidth: 1512, minHeight: 400 }}>
          <Story />
        </div>
      </div>
    ),
  ],
  argTypes: {
    smallTitle: { control: 'text', description: 'Texto pequeño (H5).' },
    mainTitle: { control: 'text', description: 'Título principal (H1).' },
    buttonText: { control: 'text', description: 'Texto del botón CTA.' },
    imageSrc: {
      control: 'text',
      description:
        'URL/asset de la imagen. Si está vacío, se muestra el placeholder con máscara y botón de play.',
    },
    onButtonClick: {
      action: 'onButtonClick',
      description: 'Handler del clic del botón.',
    },
  },
};

// ✅ Por defecto CON IMAGEN (muestra la máscara aplicada a la imagen)
export const Default = {
  name: 'Default (con imagen)',
  args: {
    smallTitle: 'Lorem ipsum',
    mainTitle: 'dolor sit amet, consectetur adipiscing elit',
    buttonText: 'Button',
    imageSrc: perrito,
  },
  parameters: {
    docs: {
      source: {
        code: `
import React from 'react';
import Hero from './Hero';
import perrito from '../assets/perrito.jpg';

export default function Page() {
  return (
    <Hero
      smallTitle="Lorem ipsum"
      mainTitle="dolor sit amet, consectetur adipiscing elit"
      buttonText="Button"
      imageSrc={perrito}
      onButtonClick={() => console.log('Hero button click')}
    />
  );
}
        `.trim(),
      },
    },
  },
};

export const WithoutImage = {
  name: 'Sin imagen (placeholder)',
  args: {
    smallTitle: 'Etiqueta',
    mainTitle: 'Hero sin imagen para ver el placeholder',
    buttonText: 'Acción',
    imageSrc: '',
  },
  parameters: {
    docs: {
      source: {
        code: `
import React from 'react';
import Hero from './Hero';

export default function Page() {
  return (
    <Hero
      smallTitle="Etiqueta"
      mainTitle="Hero sin imagen para ver el placeholder"
      buttonText="Acción"
      onButtonClick={() => console.log('Hero button click')}
    />
  );
}
        `.trim(),
      },
    },
  },
};

export const LongText = {
  name: 'Títulos largos',
  args: {
    smallTitle:
      'Subtítulo muy largo para pruebas de truncado y saltos de línea en distintos breakpoints',
    mainTitle:
      'Este es un título principal bastante extenso para validar el comportamiento responsivo del contenedor de texto.',
    buttonText: 'Ver más',
    imageSrc: perrito,
  },
  parameters: {
    docs: {
      source: {
        code: `
import React from 'react';
import Hero from './Hero';
import perrito from '../assets/perrito.jpg';

export default function Page() {
  return (
    <Hero
      smallTitle="Subtítulo muy largo para pruebas de truncado y saltos de línea en distintos breakpoints"
      mainTitle="Este es un título principal bastante extenso para validar el comportamiento responsivo del contenedor de texto."
      buttonText="Ver más"
      imageSrc={perrito}
    />
  );
}
        `.trim(),
      },
    },
  },
};

export const Playground = {
  name: 'Playground (controles)',
  args: {
    smallTitle: 'Etiqueta',
    mainTitle: 'Explora y ajusta las props en Controls',
    buttonText: 'Acción',
    imageSrc: perrito,
  },
  parameters: {
    docs: {
      source: {
        code: `
import React from 'react';
import Hero from './Hero';
import perrito from '../assets/perrito.jpg';

export default function Page() {
  return (
    <Hero
      smallTitle="Etiqueta"
      mainTitle="Explora y ajusta las props en Controls"
      buttonText="Acción"
      imageSrc={perrito}
    />
  );
}
        `.trim(),
      },
    },
  },
};
