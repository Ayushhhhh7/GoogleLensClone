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
];

module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins,
};
