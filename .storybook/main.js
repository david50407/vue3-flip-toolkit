const { resolve } = require('path')

module.exports = {
  "stories": [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ],
  "core": {
    "builder": "storybook-builder-vite"
  },
  async viteFinal(config) {
    return {
      ...config,

      resolve: {
        alias: {
          'vue3-flip-toolkit': resolve(__dirname, '..', 'lib'),
        },
      },
    }
  }
}
