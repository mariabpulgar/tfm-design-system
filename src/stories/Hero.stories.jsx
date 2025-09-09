// Hero.stories.jsx
import React from 'react';
import Hero from '../components/Hero';
import perrito from '../assets/perrito.jpg'; // ajusta la ruta según tu proyecto

export default {
  title: 'Components/Hero',
  component: Hero,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Sección de Hero con título, subtítulo, botón y contenedor de imagen con máscara SVG.',
      },
    },
  },
  argTypes: {
    smallTitle: { control: 'text' },
    mainTitle: { control: 'text' },
    buttonText: { control: 'text' },
    imageSrc: { control: 'text' },
    onButtonClick: { action: 'onButtonClick' },
  },
};

// ✅ Por defecto CON IMAGEN (no aparece el placeholder)
export const Default = {
  name: 'Default (con imagen)',
  args: {
    smallTitle: 'Lorem ipsum',
    mainTitle: 'dolor sit amet, consectetur adipiscing elit',
    buttonText: 'Button',
    imageSrc: perrito,
  },
  // ⬇️ Esto es lo que verás en "View code": snippet de uso real
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

// export const LongText = {
//   name: 'Títulos largos',
//   args: {
//     smallTitle:
//       'Subtítulo muy largo para pruebas de truncado y saltos de línea en distintos breakpoints',
//     mainTitle:
//       'Este es un título principal bastante extenso para validar el comportamiento responsivo del contenedor de texto.',
//     buttonText: 'Ver más',
//     imageSrc: perrito,
//   },
//   parameters: {
//     docs: {
//       source: {
//         code: `
// import React from 'react';
// import Hero from './Hero';
// import perrito from '../assets/perrito.jpg';

// export default function Page() {
//   return (
//     <Hero
//       smallTitle="Subtítulo muy largo para pruebas de truncado y saltos de línea en distintos breakpoints"
//       mainTitle="Este es un título principal bastante extenso para validar el comportamiento responsivo del contenedor de texto."
//       buttonText="Ver más"
//       imageSrc={perrito}
//     />
//   );
// }
//         `.trim(),
//       },
//     },
//   },
// };

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
