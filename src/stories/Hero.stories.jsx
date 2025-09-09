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
          'Sección de Hero con título, subtítulo, botón opcional y contenedor de imagen con máscara SVG. ' +
          'Permite intercambiar el orden de los títulos y mostrar/ocultar el botón. ' +
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
    showButton: { 
      control: 'boolean', 
      description: 'Mostrar u ocultar el botón.' 
    },
    titleOrder: {
      control: { type: 'select' },
      options: ['normal', 'reversed'],
      description: 'Orden de los títulos: normal (smallTitle → mainTitle) o reversed (mainTitle → smallTitle)'
    },
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

// ✅ Por defecto CON IMAGEN y botón
export const Default = {
  name: 'Default (con imagen y botón)',
  args: {
    smallTitle: 'Lorem ipsum',
    mainTitle: 'dolor sit amet, consectetur adipiscing elit',
    buttonText: 'Button',
    showButton: true,
    titleOrder: 'normal',
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
      showButton={true}
      titleOrder="normal"
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

export const WithoutButton = {
  name: 'Sin botón',
  args: {
    smallTitle: 'Etiqueta',
    mainTitle: 'Hero sin botón para enfoque en contenido',
    showButton: false,
    titleOrder: 'normal',
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
      mainTitle="Hero sin botón para enfoque en contenido"
      showButton={false}
      titleOrder="normal"
      imageSrc={perrito}
    />
  );
}
        `.trim(),
      },
    },
  },
};

export const ReversedTitleOrder = {
  name: 'Títulos en orden invertido',
  args: {
    smallTitle: 'Subtítulo que va después',
    mainTitle: 'Título principal que va primero',
    buttonText: 'Acción',
    showButton: true,
    titleOrder: 'reversed',
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
      smallTitle="Subtítulo que va después"
      mainTitle="Título principal que va primero"
      buttonText="Acción"
      showButton={true}
      titleOrder="reversed"
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

export const WithoutImageAndButton = {
  name: 'Sin imagen ni botón',
  args: {
    smallTitle: 'Etiqueta minimalista',
    mainTitle: 'Hero minimalista solo con texto',
    showButton: false,
    titleOrder: 'normal',
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
      smallTitle="Etiqueta minimalista"
      mainTitle="Hero minimalista solo con texto"
      showButton={false}
      titleOrder="normal"
    />
  );
}
        `.trim(),
      },
    },
  },
};

export const ReversedWithoutButton = {
  name: 'Títulos invertidos sin botón',
  args: {
    smallTitle: 'Descripción complementaria',
    mainTitle: 'Título impactante',
    showButton: false,
    titleOrder: 'reversed',
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
      smallTitle="Descripción complementaria"
      mainTitle="Título impactante"
      showButton={false}
      titleOrder="reversed"
      imageSrc={perrito}
    />
  );
}
        `.trim(),
      },
    },
  },
};

export const LongTextWithOptions = {
  name: 'Títulos largos con opciones',
  args: {
    smallTitle:
      'Subtítulo muy largo para pruebas de truncado y saltos de línea en distintos breakpoints',
    mainTitle:
      'Este es un título principal bastante extenso para validar el comportamiento responsivo del contenedor de texto.',
    buttonText: 'Ver más información',
    showButton: true,
    titleOrder: 'reversed',
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
      buttonText="Ver más información"
      showButton={true}
      titleOrder="reversed"
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
  name: 'Playground (todos los controles)',
  args: {
    smallTitle: 'Etiqueta personalizable',
    mainTitle: 'Explora y ajusta todas las props en Controls',
    buttonText: 'Acción personalizada',
    showButton: true,
    titleOrder: 'normal',
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
      smallTitle="Etiqueta personalizable"
      mainTitle="Explora y ajusta todas las props en Controls"
      buttonText="Acción personalizada"
      showButton={true}
      titleOrder="normal"
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

export const Personalizada1 = {
  args: {
    smallTitle: "Etiqueta personalizable",
    mainTitle: "Explora y ajusta todas las props en Controls",
    buttonText: "Acción personalizada",
    showButton: false,
    titleOrder: "reversed",
    imageSrc: "/src/assets/perrito.jpg"
  },

  name: "Playground (todos los controles)",

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
      smallTitle="Etiqueta personalizable"
      mainTitle="Explora y ajusta todas las props en Controls"
      buttonText="Acción personalizada"
      showButton={true}
      titleOrder="normal"
      imageSrc={perrito}
      onButtonClick={() => console.log('Hero button click')}
    />
  );
}
        `.trim()
      }
    }
  }
};