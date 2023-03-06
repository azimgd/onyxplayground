const path = require('path');
const {CracoAliasPlugin} = require('react-app-alias-ex');

module.exports = {
  plugins: [
    {
      plugin: CracoAliasPlugin,
      options: {},
    },
  ],
  eslint: {
    enable: false,
  },
  webpack: {
    alias: {
      'react-native-onyx': path.resolve(__dirname, 'src/react-native-onyx/lib'),
    },
  },
};
