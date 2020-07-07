const { resolve } = require('path')

module.exports = {
  stories: ['../src/**/*.stories.(tsx|mdx)'],
  addons: [
    {
      name: '@storybook/preset-typescript',
      options: {
        forkTsCheckerWebpackPluginOptions: {
          colors: false
        },
        include: [resolve('../src')]
      }
    },
    '@storybook/addon-knobs/register',
    '@storybook/addon-actions',
    '@storybook/addon-links'
  ]
}
