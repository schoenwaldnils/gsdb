const { viewportsCss } = require('./app/js/viewports');

module.exports = () => ({
  plugins: {
    'postcss-import': {},
    'postcss-url': {},
    'postcss-custom-media': {
      importFrom: [{
        customMedia: viewportsCss,
      }],
    },
    'postcss-calc': {},
    autoprefixer: {},
    'postcss-reporter': {
      clearMessages: true,
    },
  },
});
