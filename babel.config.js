const plugins = [
  [
    require.resolve('babel-plugin-module-resolver'),
    {
      root: ['./src/'],
      alias: {
        Components: './src/show/components',
        Containers: './src/show/containers',
        Theme: './src/show/theme'
      },
    },
  ],
  'react-native-reanimated/plugin',
];

module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins,
};
