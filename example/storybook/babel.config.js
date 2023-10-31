const path = require('path');
module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      process.env.NODE_ENV !== 'production'
        ? [
            'module-resolver',
            {
              alias: getAliases(),
            },
          ]
        : [
            'babel-plugin-react-docgen-typescript',
            {
              exclude: 'node_modules',
            },
          ],
      '@babel/plugin-transform-modules-commonjs',
    ],
  };
};
function getAliases() {
  return {
    // For development, we want to alias the library to the source
    '@gluestack-ui/themed': path.join(
      __dirname,
      '../../packages/themed-native-base/src'
    ),
    '@gluestack-ui/themed-default': path.join(
      __dirname,
      '../../node_modules/@gluestack-ui/themed'
    ),
    // '@gluestack-style/react': path.join(
    //   __dirname,
    //   '../../../dank-style/packages/react/src'
    // ),
  };
}
