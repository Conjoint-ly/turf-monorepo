const path = require('path');

module.exports = {
  resolve: {
    extensions: ['.js', '.vue'],
    alias: {
      '@': path.resolve(__dirname, './packages/examples/src/ui/src'),
      '@conjointly/turf-analysis-core': path.resolve(__dirname, './packages/core'),
      '@conjointly/turf-analysis-ui': path.resolve(__dirname, './packages/ui'),
    },
  },
};
