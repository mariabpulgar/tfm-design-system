// Solo importar estilos CSS - sin JavaScript dinámico
import '../src/App.css';

/** @type { import('@storybook/react-vite').Preview } */
const preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },

    a11y: {
      test: "todo"
    },

    docs: {
      toc: true,
    },
  },
};

export default preview;