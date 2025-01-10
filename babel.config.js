const plugins = [
  [
    require.resolve('babel-plugin-module-resolver'),
    {
      root: ["./src/"],
      alias: {
        "Containers": "./src/show/containers"
      }
    }
  ]
];

module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins
};