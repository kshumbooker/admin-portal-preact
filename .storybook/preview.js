/** @type { import('@storybook/preact').Preview } */
import "../src/main.css";
import "typeface-lato";

const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
