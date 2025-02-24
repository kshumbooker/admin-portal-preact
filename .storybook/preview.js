/** @type { import('@storybook/preact').Preview } */
import { h } from 'preact';
import "../dist/output.css";
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
