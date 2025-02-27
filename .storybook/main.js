
/** @type { import('@storybook/preact-webpack5').StorybookConfig } */
const config = {
  stories: [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  addons: [
    "@storybook/addon-webpack5-compiler-swc",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions"
  ],
  framework: {
    name: "@storybook/preact-webpack5",
    options: {}
  },
  docs: {
    autodocs: "tag", // Automatically generates docs for stories tagged with 'autodocs'
    defaultName: "Documentation"
  },
};
export default config;